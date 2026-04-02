import { describe, it, expect } from "vitest";
import { BRAND, BRAND_META, getWhatsAppUrl } from "../brand";

describe("brand constants", () => {
  it("should have correct brand name", () => {
    expect(BRAND.name).toBe("DuaDuaInterior");
  });

  it("should have phone digits without special chars", () => {
    expect(BRAND.phoneDigits).toMatch(/^\d+$/);
  });

  it("should generate whatsapp url without message", () => {
    const url = getWhatsAppUrl();
    expect(url).toContain(`wa.me/${BRAND.phoneDigits}`);
  });

  it("should generate whatsapp url with encoded message", () => {
    const url = getWhatsAppUrl("Hello World");
    expect(url).toContain("text=Hello%20World");
  });
});

describe("brand meta", () => {
  it("should include brand name in default title", () => {
    expect(BRAND_META.defaultTitle).toContain(BRAND.name);
  });

  it("should have title template placeholder", () => {
    expect(BRAND_META.titleTemplate).toContain("%s");
  });
});
