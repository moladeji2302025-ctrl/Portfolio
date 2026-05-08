/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#6D5CFF',
        secondary: '#00B8D9',
        accent: '#1F2547',
        background: '#F3F6FF',
        surface: '#FFFFFF',
        ink: '#11162E',
        muted: '#5D668A',
        highlight: '#E8EDFF',
      },
      boxShadow: {
        vivid: '0 24px 60px -20px rgba(82, 74, 205, 0.28)',
        neon: '0 0 0 1px rgba(109, 92, 255, 0.16), 0 14px 42px -20px rgba(0, 184, 217, 0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundSize: {
        motion: '160% 160%',
      },
    },
  },
  plugins: [],
};
