module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue-light': '#E8F5FD',
        'twitter-blue-normal': '#1D9BF0',
        'twitter-blue-medium': '#4786C5',
      },
      backgroundImage: {
        backgroundTwitter: "url('/assets/twitter.png')",
      },
    },
  },
  plugins: [],
}
