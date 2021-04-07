import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~styles/SecondaryLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Title } from '~styles/Title';
import motionGraphics from '~content/motionGraphics.json';

const MotionGraphics = () => {
  return (
    <MainLayout
      pageTitle="Motion Graphics"
      pathName="portfolio/motion-graphics"
    >
      <SecondaryLayout>
        <Title>Motion Graphics</Title>
        <p>
          Once a design has been created, to see it go to the next step as a
          motion graphic is really exciting. I have had the privilege of
          creating motion graphics for logo animation, web banner ads and more.
        </p>
      </SecondaryLayout>
      <Gallery data={motionGraphics} />
    </MainLayout>
  );
};

export default MotionGraphics;
