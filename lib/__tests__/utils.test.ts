import { describe, it, expect } from "vitest";
import { cn } from "../utils";

describe("cn utility", () => {
  it("should merge class names correctly", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("should handle conditional classes", () => {
    expect(cn("base", { conditional: true, hidden: false })).toBe("base conditional");
  });

  it("should handle falsy values", () => {
    expect(cn("base", false, null, undefined, 0)).toBe("base");
  });

  it("should merge tailwind classes with tailwind-merge", () => {
    expect(cn("px-2 px-4", "py-2")).toBe("px-4 py-2");
  });
});
