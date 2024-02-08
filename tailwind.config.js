/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/**/*.html', './public/**/*.js'],
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        brightRed:'#DF6951',
        darkred:'#F15A2B',
        yellowGold: '#F1A501',
        darkBlue: '#181E4B',
        purpleDark:'#6246E5',
        lightPurple:'#5E6282',
        veryDarkBlue:'#14183E',
        grayish:'#959BAA',
        yellowLight: '#FFF1DA',
        semiDarkBlue:'#006380',
        superLightPurple:'rgba(98,70,229,5%)',
        orangeLight:'#FF8B6B'
      },
      fontFamily: {
        sans: ['Google Sans', 'Poppins', 'Arial', 'sans-serif','Volkhov','Open Sans'],
      },
    },
  },
  plugins: [],
}
