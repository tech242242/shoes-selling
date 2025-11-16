/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        "bt-black": "#0d0d0d",
        "bt-dark": "#121212",
        "bt-red": "#E50914",
        "bt-gray": "#1a1a1a",
        "bt-muted": "#9CA3AF"
      },
      boxShadow: {
        '3d-card': '0 10px 30px rgba(0,0,0,0.6), 0 6px 12px rgba(0,0,0,0.35)'
      },
      rotate: { '-3': '-3deg' },
      transitionDuration: { 400: '400ms', 1200: '1200ms' }
    }
  },
  plugins: []
}
