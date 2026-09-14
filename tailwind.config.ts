import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        marine: { DEFAULT: "#0E1C31", mid: "#152540" },
        teal: { DEFAULT: "#2AADA0", dark: "#1E8A7F" },
        mist: "#F4F6F9",
        mist2: "#EEF1F5",
        mute: "#4A5A6E",
      },
    },
  },
  plugins: [],
};
export default config;
