/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        be: 'rgba(245, 244, 242, 1)',
        read: 'rgba(234, 228, 211,1)',
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        patrick: ['Patrick Hand'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    keyframes: {
      color: {
        '0%': { 'background-position': '0 50%' },
        '50%': { 'background-position': '50% 100%' },
        '100%': { 'background-position': '0 50%' },
      },
      wiggle: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(180deg)' },
      },
    },
    animation: {
      'color-so-slow': 'color 6s ease-in-out infinite',
      'spin-slow': 'wiggle 60s linear infinite',
    },
  },
  plugins: [require('tailwindcss-animate'), require('flowbite/plugin')],
};
