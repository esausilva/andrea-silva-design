/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~src': path.resolve(__dirname, 'src'),
        '~pages': path.resolve(__dirname, 'src/pages'),
        '~utils': path.resolve(__dirname, 'src/utils'),
        '~components': path.resolve(__dirname, 'src/components'),
        '~styles': path.resolve(__dirname, 'src/components/styles'),
        '~helpers': path.resolve(__dirname, 'src/components/helpers'),
        '~svgs': path.resolve(__dirname, 'src/components/svgs'),
        '~content': path.resolve(__dirname, 'src/content'),
        '~hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  });
};
