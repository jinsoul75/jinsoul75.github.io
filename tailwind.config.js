const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
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
