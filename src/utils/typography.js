import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '10px',
  headerWeight: 400,
  bodyWeight: 300,
  headerFontFamily: ['Bebas Neue', 'Helvetica Neue', 'Segoe UI', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue', 'Segoe UI', 'sans-serif'],
  googleFonts: [
    {
      name: 'Bebas Neue',
      styles: ['400'],
    },
    {
      name: 'Libre Baskerville',
      styles: ['400', '700'],
    },
    {
      name: 'Montserrat',
      styles: ['200', '300', '400', '500'],
    },
  ],
});

export default typography;
