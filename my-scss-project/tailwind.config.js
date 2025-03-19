module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#009688',
        secondary: '#ff9800',
        // Add more custom colors here
      },
      spacing: {
        // Add custom spacing values here
      },
      borderRadius: {
        // Add custom border radius values here
      },
      // Add more theme customizations as needed
    },
  },
  variants: {
    extend: {
      // Add variants for utilities here
    },
  },
  plugins: [],
}