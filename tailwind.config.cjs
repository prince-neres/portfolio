/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
			colors: {
			dark: {
				100: '#757575',
				200: '#212121'
			},
			light: {
				100: '#FFFFFF',
				200: '#d3d3d3'
			},
			moon: "#F4F1C9",
			sun: "#FDB813"
		},
		fontFamily: {
        'inter': ['Inter', 'sans-serif'],
				'fira': ['Fira Code', 'sans-serif']
      },
		}
  },
  plugins: [],
}
