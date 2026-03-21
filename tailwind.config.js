/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      primary: '#e31c23',
      secondary: '#1a365d',
      light: '#f8f9fa',
      gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5dc',
        400: '#99a1af',
        500: '#6a7282',
        600: '#4a5565',
        700: '#364153',
      },
      yellow: {
        400: '#fac800',
      },
      green: {
        100: '#dcfce7',
        400: '#05df72',
        700: '#008138',
      },
      red: {
        100: '#ffe2e2',
        400: '#ff6568',
        700: '#bf000f',
      },
    },
  },
  plugins: [],
}
