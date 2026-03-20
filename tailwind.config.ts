import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A",
        surface: "#111827",
        border: "#1F2937",

        primary: "#00FF9C",
        "primary-hover": "#00CC7A",

        secondary: "#00E5FF",
        accent: "#A855F7",
        highlight: "#FACC15",
      },
      fontFamily: {
        title: ["var(--font-exo2)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 12px rgba(0, 255, 156, 0.35)",
        cyan: "0 0 12px rgba(0, 229, 255, 0.35)",
        purple: "0 0 12px rgba(168, 85, 247, 0.35)",
      },
      backgroundImage: {
        "portal-gradient":
          "linear-gradient(135deg, #00FF9C 0%, #00E5FF 50%, #A855F7 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;