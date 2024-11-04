/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': 'hsl(43, 90%, 69%)',
        'first-color-alt': 'hsl(43, 50%, 50%)',
        'title-color': 'hsl(43, 8%, 100%)',
        'text-color': 'hsl(43, 8%, 85%)',
        'text-color-lighter': 'hsl(43, 20%, 70%)',
        'body-color': 'hsl(43, 10%, 8%)',
        'header-color': 'hsl(43, 10%, 8%)',
        'container-color': 'hsl(257, 10%, 5%)',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
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
        'h2': '1.3rem',
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
    },
  },
  plugins: [],
};
