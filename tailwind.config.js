const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{html,js,jsx}'],
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5D1AE5',
        light: '#F1EBFF',
        orange: {
          ...colors.orange,
          DEFAULT: '#FF6131',
          500: '#FF6131',
        },
      },
    },
  },
  plugins: [],
};
