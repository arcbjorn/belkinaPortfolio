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
  theme: {
    extend: {
      screens: {
        phone: '320px',
        smartphone: '480px',
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