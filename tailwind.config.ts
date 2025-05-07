import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',    // default bg
        foreground: '#171717',    // default text
      },
    },
  },
  plugins: [],
};

export default config;
