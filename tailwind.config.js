module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientPink: '#ff36b3',    // HSL: 320 100% 70%
        gradientPurple: '#b366ff',  // HSL: 270 95% 75%
        gradientCyan: '#36ffff',    // HSL: 180 100% 70%
        gradientOrange: '#ff8c1a',  // HSL: 25 95% 65%
      },
      screens: {
        'xs': '375px',
      },
    },
  },
}
  