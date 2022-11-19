/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			colors: {
				"green-light": "#04C35C",
				"purple-light": "#2B6CB0",
				"white-200": "#F7FAFC",
				"gray": "#1A202C",
				"border-input": "#E8E8E8",
				"btn-hover-green": "#14d96e",
				"btn-hover-gray": "#303745",
			},
			fontFamily: {
				lato: ["'Lato', sans"],
				merriweather: ["'Merriweather', serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
