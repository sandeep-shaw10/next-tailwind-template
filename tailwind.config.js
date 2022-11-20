module.exports = {
  content: {
    enabled: process.env.NEXT_PUBLIC_NODE_ENV === 'dev' ? false: true,
    content: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'],
    },
  },
  darkMode: 'class',
  theme: {
      extend: {}
  },
  variants: {
      extend: {},
  },
  plugins: []
}