module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      transitionProperty: ['active'],
      transform: ['active'],
      opacity: ['active'],
      scale: ['active'],
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}
