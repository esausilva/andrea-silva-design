import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~styles/SecondaryLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Title } from '~styles/Title';
import illustrationData from '~content/illustration.json';

const Illustration = () => {
  return (
    <MainLayout pageTitle="Illustration" pathName="portfolio/illustration">
      <SecondaryLayout>
        <Title>Illustration</Title>
        <p>
          Illustration is the sweet spot combining my loves for art and graphic
          design. Some projects call for a completely digital illustration, and
          some combine traditional painting mediums (such as watercolor) with
          elements of digital illustration.
        </p>
      </SecondaryLayout>
      <Gallery data={illustrationData} />
    </MainLayout>
  );
};

export default Illustration;
