module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {},
    extend: {
      colors: {
        primary: '#e7e9ea',
        twitterBlue: '#1DA1F2',
        twitterPink: '#EC407F',
        twitterGreen: '#54BB7D',
        secondary: '#71767b',
      }
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
