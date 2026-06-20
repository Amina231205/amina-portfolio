import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        canvas: "hsl(var(--canvas))",
        surface: "hsl(var(--surface))",
        "surface-hover": "hsl(var(--surface-hover))",
        hairline: "hsl(var(--hairline))",
        ink: "hsl(var(--ink))",
        "ink-muted": "hsl(var(--ink-muted))",
        "ink-faint": "hsl(var(--ink-faint))",
        ring: "hsl(var(--ring))",
        // the three-lens signature accent system — swaps via [data-lens] on <html>
        lens: {
          DEFAULT: "hsl(var(--lens-accent))",
          foreground: "hsl(var(--lens-accent-foreground))",
          soft: "hsl(var(--lens-accent) / 0.12)",
          border: "hsl(var(--lens-accent) / 0.35)",
        },
        // static per-track colors, used in project tags / icons regardless of active lens
        track: {
          ai: "hsl(var(--track-ai))",
          cyber: "hsl(var(--track-cyber))",
          data: "hsl(var(--track-data))",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 6vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.375rem, 2.4vw, 1.75rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      maxWidth: {
        prose: "42rem",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      boxShadow: {
        "glow-sm": "0 0 0 1px hsl(var(--lens-accent) / 0.4), 0 8px 24px -8px hsl(var(--lens-accent) / 0.35)",
        card: "0 1px 0 0 hsl(var(--hairline)), 0 12px 32px -16px rgb(0 0 0 / 0.45)",
      },
      backgroundImage: {
        grid: "linear-gradient(hsl(var(--hairline)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--hairline)) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        scan: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 200%" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
