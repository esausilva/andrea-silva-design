import React from 'react';
import { FormspreeProvider } from '@formspree/react';

import { MainLayout } from '~components/layouts/MainLayout';
import { Work } from '~components/pages/index/Work';
import { ArtistStatement } from '~components/pages/index/ArtistStatement';
import { Testimonials } from '~components/pages/index/Testimonials';
import { InstagramFeed } from '~components/pages/index/InstagramFeed';
import { LetsChat } from '~components/pages/index/LetsChat';

const IndexPage = () => (
  <MainLayout pageTitle="Home" structuredDataTemplate={structuredDataTemplate}>
    <Work />
    <ArtistStatement />
    <Testimonials />
    <InstagramFeed />
    <FormspreeProvider project={process.env.GATSBY_FORMSPREE_PROJECT_ID}>
      <LetsChat />
    </FormspreeProvider>
  </MainLayout>
);

const structuredDataTemplate = `
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "{{url}}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1230 Kelly Ct",
    "addressLocality": "Franklin",
    "addressRegion": "TN",
    "postalCode": "37064",
    "addressCountry": "US"
  },
  "description": "{{description}}",
  "name": "Andrea Silva Design",
  "url": "{{url}}",
  "telephone": "{{phone}}}",
  "image": [{{business-images}}],
  "priceRange": "$-$$$$",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.926440,
    "longitude": -86.891430
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Artistic Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Graphic Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fine Art"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Illustrations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motion Graphics"
        }
      }
    ]
  },
  "organization": {
    "@type": "Organization",
    "url": "{{url}}",
    "logo": "{{logo}}"
  }
}
`;

export default IndexPage;
