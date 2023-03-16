/** @type {import('tailwindcss').Config} */
module.exports = {
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
				200: '#BDBDBD'
			}
		}
		}
  },
  plugins: [],
}
