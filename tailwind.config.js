import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}' // Include your React source files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Use daisyui with ES modules
  ],
  daisyui: {
    themes: ['winter', 'night'], // Configure DaisyUI wth themes
  },
};
