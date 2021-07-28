import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Title } from '~styles/Title';
import graphicDesignData from '~content/portfolio/graphicDesign.json';

const GraphicDesign = () => (
  <MainLayout pageTitle="Graphic Design" pathName="portfolio/graphic-design">
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
