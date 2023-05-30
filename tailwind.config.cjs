/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		},
		extend: {
			fontFamily: {
				body: ['OpenSans', ...defaultTheme.fontFamily.sans],
				"second": ['Ubuntu', ...defaultTheme.fontFamily.sans]
			},
			letterSpacing: {
			},
			fontWeight: {
			},
			fontSize: {
			},
			borderRadius: {
			},
			backgroundSize: {
			},
			spacing: {
				15: '60px',
			},
			maxWidth: {
				'1/2': '50%',
			},
			colors: {
				inherit: 'inherit',
				'dark-1': '#30D5C7',
				'dark-2': '#27BEB1',
				'dark-3': '#21A398',
				'dark-4': '#1C887E',
				'dark-5': '#166C65',
				'dark-6': '#11514C',
				'dark-7': '#0B3633',
				'dark-8': '#061B19',
				'light-1': '#4ADACE',
				'light-2': '#64E0D5',
				'light-3': '#7EE5DC',
				'light-4': '#98EAE3',
				'light-5': '#B1EFEA',
				'light-6': '#CBF5F1',
				'light-7': '#E5FAF8',
				'black-1': '#1D1D1F',
				'gray-1': '#333333',
				'gray-2': '#4F4F4F',
				'gray-3': '#828282',
				'gray-4': '#BDBDBD',
				'gray-5': '#E0E0E0',
				'gray-6': '#F2F2F2',
				'silver': '#BDBDBD',
			},
			boxShadow: {
				'header': '0px -36px 70px rgba(0, 0, 0, 0.1)'
			},
			borderRadius: {
				'smd': '4px',
				'2lg': '10px',
				'2.5xl': '20px',
				'4xl': '30px',
			},
			gridTemplateAreas: {
				'layout': [
				'header',
				'main',
				'footer',
				],
			},
			gridTemplateRows: {
				'aa1': 'repeat(2, auto) 1fr',
				'a1': 'auto 1fr',
				'1a': '1fr auto',
				'1a1': '1fr auto 1fr',
				'a11': 'auto 1fr 1fr',
				'11a': '1fr 1fr auto',
				'a1a': 'auto 1fr auto',
				'1aa': '1fr repeat(2, auto)',
				'a1aa': 'auto 1fr repeat(2, auto)',
				'full': '100%',
			},
			gridTemplateColumns: {
				'aa1': 'repeat(2, auto) 1fr',
				'a1': 'auto 1fr',
				'1a': '1fr auto',
				'1a1': '1fr auto 1fr',
				'a11': 'auto 1fr 1fr',
				'11a': '1fr 1fr auto',
				'a1a': 'auto 1fr auto',
				'1aa': '1fr repeat(2, auto)',
				'a1aa': 'auto 1fr repeat(2, auto)',
				'full': '100%',
			},
			animation: {
				'opacity-enter-active': 'opacity 0.3s ease',
				'opacity-leave-active': 'opacity 0.3s ease reverse',
				'slide-enter-active': 'slide 0.5s',
				'slide-leave-active': 'slide 0.5s reverse'
			},
			keyframes: {
				opacity: {
					'0%': {
						'@apply opacity-0': {},
					},
					'100%': {
						'@apply opacity-100': {},
					}
				},
				slide: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				},
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@savvywombat/tailwindcss-grid-areas'),
		require('@tailwindcss/line-clamp')
	],
}
