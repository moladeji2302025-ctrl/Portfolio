/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './about.html', './project.html', './experience.html', './script.js'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        bg: '#0f0f0f',
        'bg-alt': '#161616',
        surface: '#1c1c1c',
        border: 'rgba(255,255,255,0.08)',
        'text-primary': '#f5f5f5',
        muted: '#888888',
        accent: '#64ffda',
      },
    },
  },
  plugins: [],
};
