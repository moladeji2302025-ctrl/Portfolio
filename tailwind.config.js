/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#8B4513',
        secondary: '#A0522D',
        accent: '#1E1E24',
        background: '#FEF6B6',
        surface: '#FFF3D1',
        ink: '#111827',
        muted: '#6B7280',
        highlight: '#F4E4CD',
      },
      boxShadow: {
        vivid: '0 20px 60px -25px rgba(139, 69, 19, 0.3)',
        neon: '0 0 0 1px rgba(30, 30, 36, 0.08), 0 14px 40px -20px rgba(160, 82, 45, 0.35)',
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
