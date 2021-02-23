import React from 'react';
import styled from 'styled-components';

import { MainLayout } from '~components/layouts/MainLayout';
import { Gallery } from '~components/Gallery/Gallery';
import motionGraphics from '~content/motionGraphics.json';

//#region Styles
const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
`;
//#endregion

const MotionGraphics = () => {
  return (
    <MainLayout>
      <Title>Motion Graphics</Title>
      <Gallery data={motionGraphics} />
    </MainLayout>
  );
};

export default MotionGraphics;
