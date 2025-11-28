/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        'dancing-script': ["Dancing Script", "cursive"],
        lora: ["Lora", "serif"],
        wix: ["Wix Madefor Text", "sans-serif"],
        readex: ["Readex Pro", "sans-serif"],
        cursive: ['"Dancing Script"', 'cursive'], 
      },
      screens: {
        'xl': '1200px',
        // md: 768px is already default in Tailwind
      },
      keyframes: {
        'gradient-animation': {
          '0%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        }
      },
      animation: {
        'gradient': 'gradient-animation 3s linear infinite',
      }
    },
  },
  plugins: [],
}