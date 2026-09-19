/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#B35434',
        secondary: '#964024',
        tertiary: '#7C321B',
        quaternary: '#632512',
        quinary: '#501E0E',
        senary: '#C96A4C',
        septenary: '#DB856B',
        octonary: '#ECA38D',
        nonary: '#F7C8B9',
        denary: '#FDE8E1',
        linen: '#FAF7F2',
        sand: '#F3EDE4',
        cream: '#FFFDF9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Cormorant: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
        alex: ['Alex Brush', 'cursive'],
      },
    },
  },
};
