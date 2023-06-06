module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  theme: {
    colors: {
      alpha: '#4CAF50',
      beta: '#E0E0E0',
      gamma: ''
    }
  }
}
