/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {},
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    }
  },
  plugins: [],
  
}

