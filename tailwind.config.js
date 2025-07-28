// tailwind.config.js
export default {
  darkMode: 'class', // or 'media' if you prefer
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#213547',
        border: '#e5e7eb', // default Tailwind gray-200
        ring: '#3b82f6', // default Tailwind blue-500
      },
    },
  },
  plugins: [],
};
