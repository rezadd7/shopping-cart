/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {},
    screens: {
      'Ise': '360px',
      'IpA': '616px',
      'md': '768px',
      'desktop': '1280px',
      'tablet': '1000px',
    },
    boxShadow: {
      '3xl': '8px 8px 8px rgba(0, 0, 0, 0.3),0px 5px 24px rgba(149, 157, 165, 0.4)',
      'nav': '0px 5px 24px rgba(149, 157, 165, 0.4)',
      'cart': 'rgba(50, 50, 93, 0.25) 0px 4px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
    }
  },
  plugins: [],
}

