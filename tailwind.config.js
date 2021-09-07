module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image-placeholder': "url('/src/placeholder.png')",
       }),
      spacing: {
        '22': '5.5rem',
        '100': '28.125rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
