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
        projectBorder: "#FFECE2"
    }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'md': '800px',
      // => @media (min-width: 800px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
  },
  },
  plugins: [],
}
