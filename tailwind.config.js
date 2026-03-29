/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e31c23',
          50: '#fef2f2',
          100: '#fde3e3',
          500: '#e31c23',
          600: '#dc2626',
          700: '#b91c1c',
          900: '#7f1d1d',
        },
        secondary: {
          DEFAULT: '#1a365d',
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#1a365d',
          600: '#1e40af',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        light: {
          DEFAULT: '#f8f9fa',
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
        },
      },
    },
  },
  plugins: [],
}
