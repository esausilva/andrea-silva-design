import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Seo } from '~components/helpers/SEO';
import { Title } from '~styles/Title';
import graphicDesignData from '~content/portfolio/graphicDesign.json';

const GraphicDesign = () => (
  <MainLayout>
    <SecondaryLayout>
      <Title>Graphic Design</Title>
      <p>
        As a graphic designer my work includes projects in print design, logo
        design and branding, and various projects across multiple forms of
        media.
      </p>
    </SecondaryLayout>
    <Gallery data={graphicDesignData} />
  </MainLayout>
);

export default GraphicDesign;

export const Head = ({ location }) => (
  <Seo pageTitle="Graphic Design" pathName={location.pathname} />
);
