import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Seo } from '~components/helpers/SEO';
import { Title } from '~styles/Title';
import illustrationData from '~content/portfolio/illustration.json';

const Illustration = () => {
  return (
    <MainLayout>
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

export const Head = ({ location }) => (
  <Seo pageTitle="Illustration" pathName={location.pathname} />
);
