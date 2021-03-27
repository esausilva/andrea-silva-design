import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Title } from '~styles/PortfolioTitle';
import graphicDesignData from '~content/graphicDesign.json';

const GraphicDesign = () => (
  <MainLayout pageTitle="Graphic Design" pathName="portfolio/graphic-design">
    <Title>Graphic Design</Title>
    <Gallery data={graphicDesignData} />
  </MainLayout>
);

export default GraphicDesign;
