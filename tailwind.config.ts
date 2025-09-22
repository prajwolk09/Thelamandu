import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xl-custom": '1250px',
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Thelamandu golden brand colors based on #EB9324
        "cream-light": "hsl(var(--cream-light))",
        "golden-primary": "hsl(var(--golden-primary))", // #EB9324
        "golden-light": "hsl(var(--golden-light))",
        "golden-dark": "hsl(var(--golden-dark))",
        "brown-warm": "hsl(var(--brown-warm))",
        "brown-medium": "hsl(var(--brown-medium))",
        "orange-deep": "hsl(var(--orange-deep))",
        "text-contrast": "hsl(var(--text-contrast))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderWidth: {
        '3': '3px',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "vintageFloat": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)"
          },
          "25%": {
            transform: "translateY(-8px) rotate(1deg)"
          },
          "50%": {
            transform: "translateY(-4px) rotate(0deg)"
          },
          "75%": {
            transform: "translateY(-12px) rotate(-1deg)"
          },
        },
        "vintageGlow": {
          "0%": {
            boxShadow: "0 0 30px hsl(var(--warm-orange) / 0.4)",
            filter: "brightness(1)"
          },
          "100%": {
            boxShadow: "0 0 50px hsl(var(--burnt-orange) / 0.6)",
            filter: "brightness(1.1)"
          },
        },
        "vintageSlide": {
          "0%": {
            opacity: "0",
            transform: "translateY(40px) scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)"
          },
        },
        "rotateVintage": {
          "0%": {
            transform: "rotate(0deg) scale(1)"
          },
          "50%": {
            transform: "rotate(180deg) scale(1.05)"
          },
          "100%": {
            transform: "rotate(360deg) scale(1)"
          },
        },
        // Legacy keyframes for compatibility
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },
        "glow": {
          "0%": {
            boxShadow: "0 0 20px hsl(var(--warm-orange) / 0.3)"
          },
          "100%": {
            boxShadow: "0 0 30px hsl(var(--burnt-orange) / 0.6)"
          }
        },
        "slideUp": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "vintage-float": "vintageFloat 8s ease-in-out infinite",
        "vintage-glow": "vintageGlow 4s ease-in-out infinite alternate",
        "vintage-slide": "vintageSlide 1s ease-out",
        "rotate-vintage": "rotateVintage 25s linear infinite",
        // Legacy animations for compatibility
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;