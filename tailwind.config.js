/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: { 
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',

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

      zinc: {
        '400': '#a1a1aa',
        '500': '#71717a',
        '600': '#52525b',
        '700': '#3f3f46',
        '800': '#27272a',
        '900': '#18181b'
      },

      red: {
        '50': '#FEF2F2',
        '100': '#FEE2E2',
        '200': '#FECACA',
        '300': '#FCA5A5',
        '400': '#F87171',
        '500': '#EF4444',
        '600': '#DC2626',
        '700': '#B91C1C',
        '800': '#991B1B',
        '900': '#7F1D1D'
      },

      cyan: {
        '500': '#81d8f7',
        '300': '#9BE1FB'
      }
    },
    extend: { 
      width: {
        cardVideo: '20rem',

        'navSideBar-open': '14rem',
        'navSideBar-close': '5rem'
      },
      height: {
        cardVideo: '19rem',

        headerNavigationBar: '3.5rem',
        notifications: 'calc(100vh - 400px)',
      },
      maxWidth: {
        cardVideoInline: '70rem',
      },
      maxHeight: {
        cardVideoInline: '15rem',
        scrollNavSideBar: 'calc(100vh - 70px)',
        scrollPlaylist: 'calc(100vh - 90px)',
        scrollItemsPlaylist: 'calc(100vh - 100px)',
        notifications: 400,
      },
      minWidth: {
        cardVideoInline: '50rem',
      },
      margin: { 
        headerNavigationBar: '3.5rem',
      }
    }
  },
  plugins: [],
}
