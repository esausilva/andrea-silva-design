import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  pageTitle,
  pathName,
  structuredDataTemplate,
}) {
  const { site, allImages } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        allImages: allFile(filter: { ext: { regex: "/.jpg/" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const canonical = pathName
    ? `${site.siteMetadata.siteUrl}/${pathName}`
    : site.siteMetadata.siteUrl;

  const GetImageUrl = imageName => {
    var image = allImages.edges.find(img =>
      img.node.publicURL.includes(imageName),
    );

    return `${site.siteMetadata.siteUrl}${image?.node?.publicURL}`;
  };

  const replaceTokens = () => {
    const tokens = {
      '{{url}}': site.siteMetadata.siteUrl,
      '{{description}}': site.siteMetadata.description,
      '{{phone}}}': '785-280-1725',
      '{{email}}': 'andreasilva.design@outlook.com',
      '{{andrea-photo}}':
        'https://res.cloudinary.com/esausilva/image/upload/f_auto,q_auto,w_500/andrea-silva-design/andrea-silva-portrait.jpg',
      '{{logo}}': GetImageUrl('andrea-silva-design-logo'),
      '{{business-images}}': [
        `"${GetImageUrl('andrea-silva-design-1x1')}"`,
        `"${GetImageUrl('andrea-silva-design-4x3')}"`,
        `"${GetImageUrl('andrea-silva-design-16x9')}"`,
      ],
    };

    let sd = structuredDataTemplate;
    for (const token in tokens) {
      sd = sd.replaceAll(token, tokens[token]);
    }

    return sd;
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s - ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${pageTitle} - ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: `${canonical}`,
        },
        {
          property: `og:image`,
          content: GetImageUrl('andrea-silva-design-social-card'),
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: GetImageUrl('andrea-silva-design-social-card'),
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${pageTitle} - ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {structuredDataTemplate ? (
        <script type="application/ld+json">
          {replaceTokens(structuredDataTemplate)}
        </script>
      ) : null}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  structuredDataTemplate: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string.isRequired,
  structuredDataTemplate: PropTypes.string,
};

export { SEO };
