import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary-fixed-variant": "#503788",
        "surface-container-highest": "#e4e0f0",
        "surface-container-high": "#eae6f6",
        "on-tertiary-fixed-variant": "#6a3a1b",
        "error-container": "#ffdad6",
        "error": "#ba1a1a",
        "surface": "#fcf8ff",
        "primary": "#170040",
        "on-secondary-fixed-variant": "#653e00",
        "inverse-on-surface": "#f3efff",
        "tertiary-fixed": "#ffdbc8",
        "on-primary-fixed": "#24005b",
        "outline-variant": "#cbc4d2",
        "primary-container": "#2e1065",
        "on-primary": "#ffffff",
        "on-secondary-fixed": "#2a1700",
        "surface-dim": "#dcd8e8",
        "tertiary-container": "#411a00",
        "surface-container-lowest": "#ffffff",
        "on-background": "#1b1a25",
        "secondary-container": "#fea619",
        "surface-bright": "#fcf8ff",
        "on-tertiary-fixed": "#321200",
        "inverse-primary": "#d1bcff",
        "outline": "#7a7582",
        "surface-container": "#f0ecfc",
        "on-secondary-container": "#684000",
        "on-error-container": "#93000a",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#d1bcff",
        "tertiary": "#210a00",
        "primary-fixed": "#eaddff",
        "surface-variant": "#e4e0f0",
        "inverse-surface": "#302f3b",
        "on-tertiary-container": "#bc7e59",
        "on-tertiary": "#ffffff",
        "surface-tint": "#6950a2",
        "tertiary-fixed-dim": "#fdb78e",
        "on-primary-container": "#987ed4",
        "background": "#fcf8ff",
        secondary: "#855300",
        "on-surface": "#1b1a25",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#494550",
        "surface-container-low": "#f6f2ff",
        "secondary-fixed": "#ffddb8",
        "secondary-fixed-dim": "#ffb95f"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
};
export default config;
