import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '10px',
  headerWeight: 400,
  bodyWeight: 300,
  headerFontFamily: ['Bebas Neue', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue', 'Helvetica', 'Segoe UI', 'sans-serif'],
  googleFonts: [
    {
      name: 'Bebas Neue',
      styles: ['400'],
    },
  ],
});

export default typography;
