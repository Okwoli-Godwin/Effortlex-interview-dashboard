/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bb': "url('./src/assets/mask.png')",
      }),
      colors: {
				border: "#AEAEAE",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
        primary: "rgba(80, 65, 188, 1)",
        primaryAscent: "#BFBFBF",
				secondary: "#ffffff",
				secondaryAscent: "#FF8057",
				white: "#FFFFFF",
			},
    },
  },
  plugins: [],
}

