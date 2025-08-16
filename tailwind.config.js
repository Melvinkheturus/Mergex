/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#a855f7",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f3f4f6",
          foreground: "#6b7280",
        },
        border: "rgba(255, 255, 255, 0.1)",
        input: "rgba(255, 255, 255, 0.2)",
        ring: "#a855f7",
        accent: {
          DEFAULT: "rgba(168, 85, 247, 0.1)",
          foreground: "#a855f7",
        },
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};