import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '10px',
  headerWeight: 400,
  bodyWeight: 300,
  headerFontFamily: ['Montserrat', 'Helvetica Neue', 'Segoe UI', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'Helvetica Neue', 'Segoe UI', 'sans-serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['200', '400', '500', '600'],
    },
  ],
});

export default typography;
