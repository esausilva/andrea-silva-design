import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Title } from '~styles/PortfolioTitle';
import motionGraphics from '~content/motionGraphics.json';

const MotionGraphics = () => {
  return (
    <MainLayout
      pageTitle="Motion Graphics"
      pathName="portfolio/motion-graphics"
    >
      <Title>Motion Graphics</Title>
      <Gallery data={motionGraphics} />
    </MainLayout>
  );
};

export default MotionGraphics;
