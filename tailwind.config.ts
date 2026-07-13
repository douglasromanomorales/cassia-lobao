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
        // Paleta extraída do brand book — Cássia Lobão Estúdio Criativo
        cream: "#FEFEF2",
        sage: {
          DEFAULT: "#647E5B",
          dark: "#334F40",
        },
        blush: {
          DEFAULT: "#EFAEB6",
          light: "#F8E6E4",
        },
        coral: "#EC5238",
        mustard: "#F6B456",
        ink: "#2C2B29",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      transitionTimingFunction: {
        bloom: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
