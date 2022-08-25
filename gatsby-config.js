require('dotenv').config();

var formatDate = require('date-fns/format');

module.exports = {
  siteMetadata: {
    title: `Andrea Silva Design`,
    description: `Andrea Silva Design showcases the work of graphic designer and artist Andrea Silva, including pieces in illustration, fine art, digital design, and motion graphics. Located in Nashville, TN - Music City`,
    author: `@_esausilva`,
    siteUrl: 'https://andreasilva.design',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
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
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: process.env.INSTAGRAM_USERNAME_ID,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
        output: '/',
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        serialize: ({ siteUrl, path }) => {
          return {
            url: `${siteUrl}${path}`,
            changefreq: `weekly`,
            priority: 0.7,
            lastmod: formatDate(new Date(), 'yyyy-MM-dd'),
          };
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
        anonymize: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
