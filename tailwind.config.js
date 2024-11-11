/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      violet: 'hsl(263, 55%, 52%)',
      grayBlue: 'hsl(217, 19%, 35%)',
      blackBlue: 'hsl(219, 29%, 14%)',
      white: {
        100: 'hsl(0, 0%, 100%)',
        200: 'hsl(210, 46%, 95%)',
        300: 'hsl(0, 0%, 81%)',
      },
    },
    fontFamily: {
      barlow: ['"Barlow Semi Condensed"', 'sans-serif'],
    },
  },
  plugins: [],
};

/*
- Mobile: 375px
- Desktop: 1440px

Note for text colors:

1. "Verified Graduate" has the same color as the person's name with 50% opacity
2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity

- Family: [Barlow Semi Condensed](https://fonts.google.com/specimen/Barlow+Semi+Condensed)
- Weights: 500, 600
*/
