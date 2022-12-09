/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      boxShadow: {
        'skew': '3px 3px rgba(0,0,0,1)'
      }
    },
	},
	plugins: [],
}
