/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'soul-gray': '#f5f5f7',
        'soul-black': '#1d1d1f',
      },
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
