module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {},
    extend: {
      colors: {
        fontBlack: '#0f1419',
        fontWhite: '#e7e9ea',
        twitterBlue: '#1DA1F2',
        twitterPink: '#EC407F',
        twitterGreen: '#54BB7D',
        fontGrey: '#71767b',
      },
    },
  },
  safelist: [
    'text-twitterBlue',
    'group-hover:text-twitterBlue',
    'bg-twitterBlue',
    'text-twitterPink',
    'group-hover:text-twitterPink',
    'bg-twitterPink',
    'text-twitterGreen',
    'group-hover:text-twitterGreen',
    'bg-twitterGreen',
  ],
  plugins: [],
};
