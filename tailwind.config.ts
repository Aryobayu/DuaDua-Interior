import type { Config } from "tailwindcss";

const config: Config = {
  // Tailwind v4 tokens are defined in app/globals.css via @theme.
  // Keep this file for content scanning and shared project defaults.
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
