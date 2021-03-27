import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Title } from '~styles/PortfolioTitle';
import artData from '~content/art.json';

const Art = () => {
  return (
    <MainLayout pageTitle="Art" pathName="portfolio/art">
      <Title>Art</Title>
      <Gallery data={artData} />
    </MainLayout>
  );
};

export default Art;
