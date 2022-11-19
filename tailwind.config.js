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
			},
			fontFamily: {
				lato: ["'Lato', sans"],
				merriweather: ["'Merriweather', serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
