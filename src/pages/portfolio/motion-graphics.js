import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Seo } from '~components/helpers/SEO';
import { Title } from '~styles/Title';
import motionGraphics from '~content/portfolio/motionGraphics.json';

const MotionGraphics = () => {
  return (
    <MainLayout>
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

export const Head = ({ location }) => (
  <Seo pageTitle="Motion Graphics" pathName={location.pathname} />
);
