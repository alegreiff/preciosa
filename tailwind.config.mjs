/** @type {import('tailwindcss').Config} */


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				tablet: "900px",
				
			},
			fontFamily: {
        jakarta: ['Plus Jakarta Sans Variable', 'sans-serif'],
				outfit: ['Outfit Variable', 'sans-serif'],
      },

		},
	},
	plugins: [
		require("tailwindcss-fluid-type")({
			settings: {

        prefix: "fluid-",
      },
		}),

	],
}
