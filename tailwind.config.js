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
        accent: {
          DEFAULT: '#06b6d4',
          500: '#06b6d4',
          600: '#0891b2',
        },
        dark: {
          DEFAULT: '#0f172a',
          900: '#0f172a',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #e31c23 0%, #dc2626 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #1a365d 0%, #1e40af 100%)',
        'gradient-accent': 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1a365d 0%, #1e40af 50%, #e31c23 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
      },
    },
  },
  plugins: [],
}
