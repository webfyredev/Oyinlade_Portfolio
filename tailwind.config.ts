import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#050505",
          soft: "#080808",
        },
        surface: {
          1: "#101010",
          2: "#121212",
          3: "#151515",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
        },
        ink: {
          DEFAULT: "#F5F5F5",
          muted: "#9A9DA3",
          faint: "#6B6E74",
        },
        accent: {
          DEFAULT: "#2563EB",
          soft: "#3B7AFF",
          dim: "rgba(37,99,235,0.14)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "Inter",
          "-apple-system",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(37,99,235,0.25), 0 8px 30px -8px rgba(37,99,235,0.35)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
