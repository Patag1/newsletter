import { colors } from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...colors,
        'cwhite': '#DCDCDC',
        'cblack': '#1C1C1C',
      },
      dropShadow: {
        'btn': '2px 2px 0 rgb(31, 41, 55, 1)',
        'sm': '4px 4px 0 rgb(31, 41, 55, 1)',
      }
    },
  },
  plugins: [],
}
