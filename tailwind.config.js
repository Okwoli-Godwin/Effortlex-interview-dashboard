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
      screens: {
				sm: { min: "300px", max: "500px" },
				// => @media (min-width: 640px and max-width: 767px) { ... }
				md: { min: "768px", max: "1024px" },
				// => @media (min-width: 768px and max-width: 1023px) { ... }
				lg: { min: "1025px", max: "1279px" },
				// => @media (min-width: 1024px and max-width: 1279px) { ... }
				xl: { min: "1280px", max: "1535px" },
				// => @media (min-width: 1280px and max-width: 1535px) { ... }
				"2xl": { min: "1536px" },
				// => @media (min-width: 1536px) { ... }
			},
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

