import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-soft": "var(--background-soft)",
        card: "var(--card)",
        "card-border": "var(--card-border)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        accent: "var(--accent)",
        "section-banner": "var(--section-banner)",
        "section-banner-2": "var(--section-banner-2)",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
        glow: "0 0 30px rgba(139, 184, 216, 0.15)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to bottom, rgba(7,11,18,0.55), rgba(7,11,18,0.88))",
      },
    },
  },
  plugins: [],
};

export default config;