/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: 'Roboto, "Open Sans", Helvetica, sans-serif',
			},
			backgroundImage: {
				survival: "url('/../headerimage.png')",
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};
