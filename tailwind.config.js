module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens : {'sm': '300px'},
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px'},
    extend: {
      gridTemplateColumns: {
        'items': 'repeat(auto-fit, minmax(250px, 325px))'
      },
      colors: {
        'unknown-level': '#9e9e9e',
        'low-level': '#00a870',
        'medium-level': '#0190ee',
        'high-level': '#eab308',
        'very-high-level': '#d32f2f'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
