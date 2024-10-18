/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)']
      },
      blur: {
        xs: '2px', // Custom blur value
      },
      fontSize: {
        'xxs': '0.6rem', // Custom font size (10px)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary' : '#B7BC99',
        'subprimary' : '#B4BB8C',
        'secondary'  : '#FFBACE',
        'darkPink' : '#E9557F',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(75%)' },
          '100%': { transform: 'translateX(-75%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-75%)' },
          '100%': { transform: 'translateX(75%)' },
        },
        customPulse: {
          '0%, 100%': { opacity: '1' },  // Awal dan akhir tetap 100% opacity
          '50%': { opacity: '0.2' },     // Tengah menjadi 20% opacity
        },
        flipX: {
          '0%': { transform: 'perspective(400px) rotateY(90deg)', opacity: '0' },
          '40%': { transform: 'perspective(400px) rotateY(-10deg)' },
          '70%': { transform: 'perspective(400px) rotateY(10deg)' },
          '100%': { transform: 'perspective(400px) rotateY(0deg)', opacity: '1' },
        },

      },
      animation: {
        marquee: 'marquee 12.5s linear infinite',
        marqueeReverse: 'marqueeReverse 12.5s linear infinite',
        'spin-slow' : 'spin 3s linear infinite',
        customPulse: 'customPulse 0.5s infinite',
        flipX: 'flipX 1.8s linear infinite',
      },

    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },

  plugins: [],
};