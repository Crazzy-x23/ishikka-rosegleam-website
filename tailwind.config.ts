import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: "#6F4E37",
          100: "#e8d8ce",
          500: "#8a7365",
          700: "#5c463a",
          900: "#2d1b11"
        },
        cream: {
          50: "#fdfbf7",
          100: "#f7f0e6",
          200: "#f3ebe1"
        },
        espresso: "#2B211C",
        gold: "#D4AF37",
        ivory: "#FBF7EF",
        pearl: "#F6F1E8",
        taupe: "#B8A99A",
        rose: "#E7C9C0",
        sage: "#A8B3A1",
        ink: "#181413"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(43, 33, 28, 0.10)",
        glow: "0 18px 50px rgba(212, 175, 55, 0.20)"
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        reveal: "reveal 700ms ease-out both",
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
