import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Title } from '~styles/PortfolioTitle';
import illustrationData from '~content/illustration.json';

const Illustration = () => {
  return (
    <MainLayout pageTitle="Illustration" pathName="portfolio/illustration">
      <Title>Illustration</Title>
      <Gallery data={illustrationData} />
    </MainLayout>
  );
};

export default Illustration;
