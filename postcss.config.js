const { plugin } = require("postcss")

module.exports = () => ({
  plugins: [require("tailwindcss", "autoprefixer")],
});