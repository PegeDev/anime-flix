import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#051327",
        secondary: "#4D52BA",
      },
      animation: {
        "move-updown": "moveUpDown 10s ease-in-out infinite",
      },
      keyframes: {
        moveUpDown: {
          "0%": {
            transform: "translateY(0%)",
          },
          "50%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
