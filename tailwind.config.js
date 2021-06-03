const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: {
          50: '#f7f9fb',
          100: '#e4f0fd',
          200: '#c6d8fa',
          300: '#9eb5f3',
          400: '#7b8dea',
          500: '#6567e7',
          600: '#524cd6',
          700: '#3f39b6',
          800: '#2c2788',
          900: '#181856',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
