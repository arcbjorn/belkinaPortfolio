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
      smbase: ['14px', '21px'],
      i18n: ['16px', {
        letterSpacing: '0.15em',
        lineHeight: '24px',
      }],
      base: ['18px', '27px'],
      xxs: ['20px', '30px'],
      xs: ['22px', '33px'],
      sm: ['28px', '42px'],
      md: ['34px', '51px'],
      lg: ['56px', '84px'],
      xl: ['98px', '147px'],
      xxl: ['118px', '177px'],
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
      },
    },
  },
  variants: {},
  plugins: [],
};