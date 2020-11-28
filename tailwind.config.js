const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: { // for tailwind 2.0 compat
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.svelte',
    './src/*.svelte',
  ],
  separator: '_',
  theme: {
    fontSize: {
      sm: ['14px', '21px'],
      base: ['18px', '27px'],
      lg: ['34px', '51px'],
      xl: ['118px', '177px'],
    },
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      'mono': ['Montserrat', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      screens: {
        phone: '320px',
        smartphone: '480px',
        minitablet: '640px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
        monitor: '1440px',
      },
    },
  },
  variants: {},
  plugins: [],
};