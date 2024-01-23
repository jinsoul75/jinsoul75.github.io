/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      NotoSans: ['NotoSans'],
    },
  },
  variants: {
    typography: (theme) => ({
      DEFAULT: {
        css: {
          'h1,h2,h3,h4': {
            'scroll-margin-top': spacing[32],
          },
        },
      },
    }),
  },
  plugins: [require('@tailwindcss/typography')],
};
