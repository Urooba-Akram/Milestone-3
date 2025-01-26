/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Isse Tailwind ko apne project ke sabhi JS/TS/JSX/TSX files ko scan karne ko milega
  ],
  theme: {
    extend: {
      colors: {
        background: '#f0f0f0', // Custom background color jo aap use karenge 'bg-background' class ke saath
      },
    },
  },
  plugins: [],
}
