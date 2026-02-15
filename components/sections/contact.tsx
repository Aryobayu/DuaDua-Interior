"use client";

import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { LeadRequest } from "@/lib/types/lead";
import { BRAND, getWhatsAppUrl } from "@/lib/brand";

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialFormData: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  service: "Lemari & Wardrobe",
  message: "",
};

type SubmitState = "idle" | "submitting" | "success" | "fallback";

const serviceOptions = [
  "Lemari & Wardrobe",
  "Set Kamar Tidur",
  "Kitchen Set",
  "Paket Lengkap (Semua Ruangan)",
  "Hanya Konsultasi Dulu",
] as const;

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon",
    value: BRAND.phoneDisplay,
    href: `tel:+${BRAND.phoneDigits}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: BRAND.location,
    href: BRAND.mapsUrl,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const whatsappMessage = useMemo(
    () => `Halo ${BRAND.name}! Saya tertarik dengan ${formData.service}. 

Nama: ${formData.name}
Email: ${formData.email}
Telepon: ${formData.phone}

Pesan: ${formData.message}`,
    [formData],
  );

  const handleFieldChange =
    (field: keyof ContactFormState) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      if (submitState !== "idle") {
        setSubmitState("idle");
        setSubmitMessage("");
      }
    };

  const handleWhatsApp = () => {
    window.open(getWhatsAppUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  };

  const getUtmParams = (): LeadRequest["utm"] => {
    if (typeof window === "undefined") return undefined;

    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source") ?? undefined;
    const medium = params.get("utm_medium") ?? undefined;
    const campaign = params.get("utm_campaign") ?? undefined;
    const term = params.get("utm_term") ?? undefined;
    const content = params.get("utm_content") ?? undefined;

    if (!source && !medium && !campaign && !term && !content) {
      return undefined;
    }

    return {
      source,
      medium,
      campaign,
      term,
      content,
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (submitState === "submitting") return;

    setSubmitState("submitting");
    setSubmitMessage("");

    const honeypotValue = (
      new FormData(e.currentTarget as HTMLFormElement).get("companyWebsite") ??
      ""
    )
      .toString()
      .trim();

    const payload: LeadRequest = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      sourcePage:
        typeof window !== "undefined"
          ? `${window.location.pathname}#contact`
          : "/#contact",
      consent: true,
      utm: getUtmParams(),
      companyWebsite: honeypotValue,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead API failed");
      }

      setSubmitState("success");
      setSubmitMessage(
        "Terima kasih, data Anda berhasil kami terima. Tim kami akan menghubungi Anda segera.",
      );
      setFormData(initialFormData);
    } catch {
      setSubmitState("fallback");
      setSubmitMessage(
        "Sistem sedang sibuk. Kami membuka WhatsApp agar konsultasi tetap berjalan.",
      );
      handleWhatsApp();
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                  Hubungi Kami
                </span>
              </div>

              <h2 className="font-[var(--nav-font-display)] text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                Wujudkan Interior
                <span className="block text-primary-500">Impian Anda</span>
              </h2>

              <p className="text-lg text-neutral-600">
                Punya proyek dalam pikiran? Kami siap membantu. Kirim pesan dan
                tim kami akan merespons secepat mungkin.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-soft flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                    <info.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-600 mb-0.5">
                      {info.label}
                    </div>
                    <div className="font-semibold text-neutral-900">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Quick Button */}
            <div className="p-6 bg-success-light/10 border border-success-light/30 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-success-light flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    Lebih Suka WhatsApp?
                  </div>
                  <div className="text-sm text-neutral-600">
                    Respon instan dari tim kami
                  </div>
                </div>
              </div>
              <Button
                className="w-full bg-success-light hover:bg-success text-white"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat via WhatsApp
              </Button>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-neutral-50 rounded-4xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="companyWebsite"
                autoComplete="off"
                tabIndex={-1}
                className="hidden"
                aria-hidden="true"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleFieldChange("name")}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Alamat Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleFieldChange("email")}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Nomor Telepon/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder={BRAND.phoneDisplay}
                  value={formData.phone}
                  onChange={handleFieldChange("phone")}
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Tertarik Dengan *
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  value={formData.service}
                  onChange={handleFieldChange("service")}
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-neutral-700 mb-2"
                >
                  Pesan (Opsional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                  value={formData.message}
                  onChange={handleFieldChange("message")}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={submitState === "submitting"}
              >
                {submitState === "submitting"
                  ? "Mengirim Data..."
                  : "Kirim Permintaan Konsultasi"}
                <Send className="w-5 h-5 ml-2" />
              </Button>

              <p
                className="text-xs text-center text-neutral-600"
                aria-live="polite"
              >
                {submitMessage}
              </p>

              <p className="text-xs text-neutral-500 text-center">
                Dengan mengirim form ini, Anda setuju untuk dihubungi melalui
                WhatsApp
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
