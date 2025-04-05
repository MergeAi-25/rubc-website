/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Deep blue color
        'primary-dark': '#1E3A8A',
        secondary: '#6B7280', // Gray color
        'secondary-dark': '#4B5563',
      },
    },
  },
  plugins: [],
}; 