import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Seo } from '~components/helpers/SEO';
import { Title } from '~styles/Title';
import artData from '~content/portfolio/art.json';

const Art = () => {
  return (
    <MainLayout>
      <SecondaryLayout>
        <Title>Fine Art</Title>
        <p>
          As a fine art and portrait artist, my primary medium is watercolor,
          but I also enjoy painting with oils. My inspiration comes from nature,
          travel, and the everyday moments that make life special.
        </p>
      </SecondaryLayout>
      <Gallery data={artData} />
    </MainLayout>
  );
};

export default Art;

export const Head = ({ location }) => (
  <Seo pageTitle="Fine Art" pathName={location.pathname} />
);
