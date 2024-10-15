import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description = '',
  pageTitle,
  pathName,
  structuredDataTemplate = null,
  children,
}) {
  const { site, allImages } = useStaticQuery(graphql`
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
  `);

  const metaDescription = description || site.siteMetadata.description;
  const canonical = pathName
    ? `${site.siteMetadata.siteUrl}${pathName}`
    : site.siteMetadata.siteUrl;
  const titleTemplate = `${pageTitle} | ${site.siteMetadata.title}`;

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
      const re = new RegExp(token, 'g');
      sd = sd.replace(re, tokens[token]);
    }

    return sd;
  };

  return (
    <>
      <title>{titleTemplate}</title>
      {canonical ? <link rel="canonical" href={canonical} /> : ''}
      <meta name="description" content={metaDescription} />
      <meta
        name="og:title"
        content={`${pageTitle} - ${site.siteMetadata.title}`}
      />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={canonical} />
      <meta
        name="og:image"
        content={GetImageUrl('andrea-silva-design-social-card')}
      />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={GetImageUrl('andrea-silva-design-social-card')}
      />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta
        name="twitter:title"
        content={`${pageTitle} - ${site.siteMetadata.title}`}
      />
      <meta name="twitter:description" content={metaDescription} />
      {children}
      {structuredDataTemplate ? (
        <script type="application/ld+json">
          {replaceTokens(structuredDataTemplate)}
        </script>
      ) : null}
    </>
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  pageTitle: PropTypes.string.isRequired,
  structuredDataTemplate: PropTypes.string,
};

export { SEO as Seo };
