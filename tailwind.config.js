/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: { 
      transparent: 'transparent',

      state: {
        '50': '#f8fafc',
        '100': '#f1f5f9', 
        '300': '#cbd5e1', 
        '400': '#94a3b8', 
        '500': '#64748b', 
        '600': '#475569',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0F172A'
      },

      cyan: {
        500: '#81d8f7',
        300: '#9BE1FB'
      }
    },
    extend: {  
      height: {
        headerNavigationBar: '3.5rem',
      }
    }
  },
  plugins: [],
}
