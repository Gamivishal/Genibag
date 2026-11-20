/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F26A3D',
          hover: '#E05526',
          light: '#FDF0EB',
          subtle: '#FFF5F0',
          dark: '#D04E20',
        },
        navy: {
          DEFAULT: '#1E2433',
          dark: '#141824',
          light: '#283145',
          card: '#22293A',
          muted: '#8A97AB',
          border: '#2C3549',
        },
        warm: {
          grey: '#FAF7F5',
          card: '#FFFFFF',
          border: '#E8E3DD',
          subtle: '#F4EFEB',
        },
        teal: {
          DEFAULT: '#14A8A0',
          light: '#E6F7F6',
          dark: '#0E807A',
        },
        magenta: {
          DEFAULT: '#D6336C',
          light: '#FCEEF3',
          dark: '#B02555',
        },
        blue: {
          DEFAULT: '#2B7DE9',
          light: '#EAF2FD',
          dark: '#1B62C2',
        },
        green: {
          DEFAULT: '#2FA84F',
          light: '#EBF6EE',
          dark: '#23873E',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        brand: '12px',
        'brand-sm': '8px',
        'brand-lg': '16px',
        'brand-xl': '20px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(30, 36, 51, 0.05)',
        'soft-md': '0 8px 24px -4px rgba(30, 36, 51, 0.08)',
        'soft-lg': '0 16px 36px -6px rgba(30, 36, 51, 0.12)',
        header: '0 4px 20px -2px rgba(30, 36, 51, 0.08)',
        dropdown: '0 14px 36px -4px rgba(30, 36, 51, 0.15)',
        card: '0 2px 12px rgba(30, 36, 51, 0.04)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float-x': 'floatX 3.5s ease-in-out infinite',
        'float-y': 'floatY 3.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(25px)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
    },
  },
  plugins: [],
}
