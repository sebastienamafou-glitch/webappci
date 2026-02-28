import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Liaison avec les variables définies dans layout.tsx
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-outfit)", "display"],
      },
      colors: {
        brand: {
          50: '#f0fdfa',
          400: '#2dd4bf',
          500: '#14b8a6', // Ton Teal principal
          900: '#134e4a',
        },
      },
    },
  },
  plugins: [],
};

export default config;
