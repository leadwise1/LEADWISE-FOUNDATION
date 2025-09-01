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
          cream: '#fffefa',
          navy: '#212240',
          peach: '#ffd6c5',
        },
        fontFamily: {
          'cinzel': ['Cinzel', 'serif'],
          'oswald': ['Oswald', 'sans-serif'],
        },
        container: {
          center: true,
          padding: '1.25rem',
          screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
          },
        },
      },
    },
    plugins: [],
  }