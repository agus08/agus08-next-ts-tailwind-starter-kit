/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   poppins: ["Poppins", "sans-serif"],
      // },
      screens: {
        xs: '376px',
      },
      aspectRatio: {
        cover: '2 / 1',
      },
      width: {
        200: '200px',
      },
      height: {
        200: '200px',
      },
      colors: {
        primary1: '#0A2B3C',
        primary2: 'rgba(9, 150, 153, 1)',
        colorText: 'rgba(190, 190, 190, 1)',
        colorLine: '#E7E7E7',
        primary3: '#FFAE1B',
        primary4: '#088487',
        warning: '#FFAE1B',
        bgWarning: 'rgba(255, 174, 27, 0.1)',
        error: '#EB3737',
        bgError: '#FDE8E8',
        success: '#099699',
        bgSuccess: '#E7FDFE',
        info: '#1B76FF',
        bgInfo: 'rgba(27, 118, 255, 0.1)',
        colorBorder: '#0D374D',
        backgroundPrimary: '#FAFAFA',
        backgroundPrimaryDark: '#F6F6F6',
        backgroundSecondary: 'rgba(9, 150, 153, 0.1)',
        backgroundTeal: 'rgba(137, 238, 222, 0.1)',
        paper: 'rgba(250, 250, 250, 1)',
        bgPaper: '#E5E5E5',
      },
    },
  },

  plugins: [],
}
