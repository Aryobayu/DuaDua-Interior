import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        blob: "blob 7s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      colors: {
        // Primary: Warm Brown/Wood Tones (inspired by furniture warmth)
        primary: {
          50: "#faf7f4",
          100: "#f5ede5",
          200: "#e8d9c8",
          300: "#d9c0a3",
          400: "#c89f6d",
          500: "#b8844d", // Main brand color
          600: "#a56d3a",
          700: "#8a5730",
          800: "#71472b",
          900: "#5d3b25",
          950: "#331f14",
        },
        // Neutral: Sophisticated Grays
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        // Accent: Premium Gold/Copper
        accent: {
          gold: "#d4af37",
          copper: "#b87333",
          rose: "#e5c5b5",
        },
        // Semantic Colors
        success: {
          light: "#86a789", // Sage green (from Luxyhome inspiration)
          DEFAULT: "#6b8f71",
          dark: "#52725b",
        },
        background: {
          light: "#ffffff",
          cream: "#faf7f4",
          beige: "#f5ede5",
          dark: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      fontSize: {
        // Custom scale untuk premium look
        "display-lg": [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ], // 72px
        "display-md": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ], // 56px
        "display-sm": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ], // 40px
      },
      spacing: {
        "18": "4.5rem", // 72px
        "88": "22rem", // 352px
        "100": "25rem", // 400px
        "128": "32rem", // 512px
      },
      borderRadius: {
        "4xl": "2rem", // 32px untuk large cards
        "5xl": "2.5rem", // 40px untuk hero elements
      },
      boxShadow: {
        soft: "0 2px 16px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 4px 24px rgba(0, 0, 0, 0.08)",
        "soft-xl": "0 8px 40px rgba(0, 0, 0, 0.12)",
        premium: "0 20px 60px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
