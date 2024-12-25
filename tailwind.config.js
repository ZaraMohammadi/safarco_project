const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'accent':{
          100:'',
          200:'#9DDAF9',
          300:'#1EB5FF'
        },
        'secondary':{
          300:'#FFC152',
          400:'#FFAB16',
          500:'#FF8F00',
        },
        'naturalGray':{
          200:'#797979',
          300:'#B7B7B7',
        },
        'primary':{
          300:'#8FFFF6',
          500:'#03C9C9',
          600:'#00A0A3',
          700:'#047C81'
        }
      },
      
    }
  },
  plugins: [nextui()],
}

