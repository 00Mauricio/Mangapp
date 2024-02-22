const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */



export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [    iconsPlugin({
		// 利用したい icon collection を利用する
		// https://icones.js.org/
		collections: getIconCollections(["heroicons","bx"]),
	  }),],
}


