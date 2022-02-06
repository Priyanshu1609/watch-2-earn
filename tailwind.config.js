module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#FFCF40",
        },
        grey: {
          DEFAULT: "#D9DCE1",
          500: "#C2C7CF",
          300: '#F7FAFC',
          700: '#989B9D',
        },
        dark: {
          DEFAULT: "#4B4D50",
          300: "#717376",
        },
        blackblue : {
          DEFAULT : '#0c1014',
        }

      },

    },
  },
  plugins: [],
};
