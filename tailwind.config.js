module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1293px",
    },
    extend: {
      fontSize: {
        '4xl': '2.125rem',
      },
      colors: {
        'primary': {
          DEFAULT: '#006C72'
        },
        'typo': {
          'dark': '#262626',
          'light': '#6B6B6B',
        }
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
};