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
          DEFAULT: '#0891b2',
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          900: '#164e63',
        },
        secondary: {
          DEFAULT: '#164e63',
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#164e63',
          600: '#0e7490',
          700: '#06b6d4',
          900: '#164e63',
        },
      },
    },
  },
  plugins: [],
}
