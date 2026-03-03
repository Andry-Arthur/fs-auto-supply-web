import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f8f7",
          100: "#d9ece7",
          200: "#b3d8ce",
          300: "#80baa9",
          400: "#4f9780",
          500: "#2f7864",
          600: "#245f50",
          700: "#1f4c41",
          800: "#1b3d35",
          900: "#17322d",
        },
        accent: "#f59e0b",
        slate: "#0f172a",
      },
      boxShadow: {
        card: "0 18px 48px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
