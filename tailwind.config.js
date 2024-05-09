/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black80: "var(--black80)",
        whisper: "var(--whisper)",
        shark: "var(--shark)",
        sci_blue: {
          base: "var(--sci-blue)",
          dark: "var(--sci-blue-dark)",
        },
        athens_gray: "var(--athens-gray)",
      },
      fontFamily: {
        sfp: '"San Francisco Pro"',
        sf: '"San Francisco',
      },
    },
  },
  plugins: [],
};
