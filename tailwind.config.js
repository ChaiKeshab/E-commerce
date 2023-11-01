/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#F5F5F5',         // White background
        secondary: '#FFFFFF',       // Light gray background
        customGrey: '#E5E5E5',     // Custom light gray background
        'customGrey-hover': '#D8D8D8', // Custom light gray background on hover
      },
      textColor: {
        primary: '#333333',        // Dark gray text
        secondary: '#666666',      // Slightly lighter gray text
      },
      outlineColor: {
        customGrey: '#C0C0C0',    // Light gray outline color
      },
      borderColor: {
        customGrey: '#D0D0D0',    // Light gray border color
      },
      gradientColorStops: {
        customGrey: '#E5E5E5',        // White gradient
      },
    },
  },
  plugins: [],
};
