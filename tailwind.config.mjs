/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom': '#272a31',
				'mp': '#009EE3',
				'paypal': '#FFC439'
			},
		},
	},
	plugins: [],
}
