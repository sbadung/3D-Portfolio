/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFDFBD',
        'wood': '#460B0B',
        'invisible': 'rgb(255, 255, 255, 0)',
        'visible': 'rgb(255, 255, 255, 0.2)'

      },
      fontFamily: {
        condensed: ['Roboto Condensed', 'sans-serif']
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}

