module.exports = {
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize:{
        '20xl': ['12rem', { lineHeight: '1' }],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
