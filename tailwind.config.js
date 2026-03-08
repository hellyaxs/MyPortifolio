/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom portfolio colors
        'first-color': 'hsl(43, 90%, 69%)',
        'first-color-alt': 'hsl(43, 50%, 50%)',
        'title-color': 'hsl(43, 8%, 100%)',
        'text-color': 'hsl(43, 8%, 85%)',
        'text-color-lighter': 'hsl(43, 20%, 70%)',
        'body-color': 'hsl(43, 10%, 8%)',
        'header-color': 'hsl(43, 10%, 8%)',
        'container-color': 'hsl(257, 10%, 5%)',
        // shadcn/ui color tokens
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        sans: ["Poppins", ...fontFamily.sans],
      },
      fontWeight: {
        medium: 500,
        'semi-bold': 600,
      },
      spacing: {
        '0-25': '0.25rem',
        '0-5': '0.5rem',
        '0-75': '0.75rem',
        '1': '1rem',
        '1-5': '1.5rem',
        '2': '2rem',
        '2-5': '2.5rem',
        '3': '3rem',
      },
      fontSize: {
        'big': '2.3rem',
        'h1': '3.4rem',
        'h2': '3rem',
        'h3': '1.125rem',
        'normal': '0.938rem',
        'small': '0.813rem',
        'smaller': '0.75rem',
      },
      zIndex: {
        tooltip: 10,
        fixed: 100,
        modal: 1000,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fadeInUp": "fadeInUp 0.5s ease-in-out",
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        // Card shadow multicamada extraída do tiobendev
        card: '0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.05), 0 12px 24px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          'background-image': 'linear-gradient(45deg, #35ce8d 0%, #FFFB7D 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.title-gradient': {
          'background-image': 'linear-gradient(to left, #FBAB7E 34%, #F7CE68 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      })
    }),
  ],
};
