/** @type {import('tailwindcss').Config} */


module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cg: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#F8F6F5",
        primary: "#EC6B5B", // 240,86,199
        primaryDark: "#684C42", // 80,230,217
        gradientOne: "#ffe3d5",
        gradientTwo: "#FC6E0B",
    }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}
