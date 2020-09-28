require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Andrea Silva Design`,
    description: `Andrea Silva Design showcases the work of graphic designer and artist Andrea Silva, including pieces in digital design, fine art, illustration, and more, located in Music City - Nashville, TN.`,
    author: `@_esausilva`,
    siteUrl: 'https://andreasilva-design.netlify.app', // TODO: Change to actual domain before production
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrea Silva Design Portfolio`,
        short_name: `Andrea Silva Design`,
        start_url: `/`,
        background_color: `#33181F`,
        theme_color: `#33181F`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS,
    //   },
    // },
    // {
    //   resolve: 'gatsby-transformer-cloudinary',
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     uploadFolder: 'esausilva-dev/portfolio/',
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
