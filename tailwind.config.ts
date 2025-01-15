import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
	    fontFamily: {
		   "Lora": ["Lora", 'serif']},
      colors: {
        background: "#F9F4ED",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        text: "-3px 4px 7px rgba(81,67,21,.8)",
      },
      boxShadow: {
        "home-btn": "0 0 5px 2px #000000a1",
        "home-btn-hover": "0 0 10px 2px #000000a1",
      },
    },
  },
  plugins: [],
} satisfies Config;
