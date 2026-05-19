import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F1EBD8",
        bone: "#FAF6EB",
        navy: "#2A2D9C",
        "navy-deep": "#1F2178",
        orange: "#F58D2D",
        "orange-deep": "#E07A1A",
        ink: "#0E0E14",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],
        sans: ["Inter", "Helvetica Neue", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
