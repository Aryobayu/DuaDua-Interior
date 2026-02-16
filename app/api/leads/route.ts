import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { leadRequestSchema } from "@/lib/validation/lead";

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const rateLimitStore = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

const getClientIp = (request: NextRequest): string => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const realIp = request.headers.get("x-real-ip");
  return realIp || "unknown";
};

const isRateLimited = (ipAddress: string): boolean => {
  const now = Date.now();
  const current = rateLimitStore.get(ipAddress);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ipAddress, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });
    return false;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ipAddress, current);
  return false;
};

let payloadClientPromise: ReturnType<typeof getPayload> | null = null;

const getPayloadClient = () => {
  if (!payloadClientPromise) {
    payloadClientPromise = getPayload({ config });
  }

  return payloadClientPromise;
};

export async function POST(request: NextRequest) {
  const ipAddress = getClientIp(request);

  if (isRateLimited(ipAddress)) {
    return NextResponse.json(
      {
        message:
          "Terlalu banyak permintaan. Silakan tunggu sebentar lalu coba lagi.",
      },
      { status: 429 },
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Payload tidak valid (format JSON salah)." },
      { status: 400 },
    );
  }

  const parsed = leadRequestSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Validasi data gagal.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const requestData = parsed.data;

  if (requestData.companyWebsite) {
    return NextResponse.json(
      {
        id: crypto.randomUUID(),
        status: "ignored_honeypot",
        createdAt: new Date().toISOString(),
      },
      { status: 200 },
    );
  }

  try {
    const payload = await getPayloadClient();

    const createdLead = await payload.create({
      collection: "leads",
      data: {
        name: requestData.name,
        email: requestData.email,
        phone: requestData.phone,
        service: requestData.service,
        message: requestData.message,
        sourcePage: requestData.sourcePage,
        consent: requestData.consent,
        utm: requestData.utm,
        ipAddress,
        status: "new",
      },
    });

    return NextResponse.json(
      {
        id: String(createdLead.id),
        status: "accepted",
        createdAt: createdLead.createdAt,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        message:
          "Sistem lead sedang bermasalah sementara. Silakan lanjutkan lewat WhatsApp.",
      },
      { status: 503 },
    );
  }
}
