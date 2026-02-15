import { leadRequestSchema } from "@/lib/validation/lead";

describe("leadRequestSchema", () => {
  it("accepts a valid lead payload", () => {
    const parsed = leadRequestSchema.safeParse({
      name: "Aryo",
      email: "aryo@example.com",
      phone: "+62 812-3456-7890",
      service: "Kitchen Set",
      message: "Saya ingin konsultasi project baru.",
      sourcePage: "/#contact",
      consent: true,
      companyWebsite: "",
    });

    expect(parsed.success).toBe(true);
  });

  it("rejects invalid phone and missing consent", () => {
    const parsed = leadRequestSchema.safeParse({
      name: "A",
      email: "aryo@example.com",
      phone: "invalid-phone",
      service: "Kitchen Set",
      sourcePage: "/#contact",
      consent: false,
      companyWebsite: "",
    });

    expect(parsed.success).toBe(false);
  });

  it("rejects filled honeypot field", () => {
    const parsed = leadRequestSchema.safeParse({
      name: "Aryo",
      email: "aryo@example.com",
      phone: "08123456789",
      service: "Wardrobe",
      sourcePage: "/#contact",
      consent: true,
      companyWebsite: "spam-bot",
    });

    expect(parsed.success).toBe(false);
  });
});
