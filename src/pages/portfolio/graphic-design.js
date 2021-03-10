import React from 'react';
import styled from 'styled-components';

import { MainLayout } from '~components/layouts/MainLayout';
import { Gallery } from '~components/Gallery/Gallery';
import graphicDesignData from '~content/graphicDesign.json';

//#region Styles
const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
`;
//#endregion

const GraphicDesign = () => (
  <MainLayout pageTitle="Graphic Design" pathName="portfolio/graphic-design">
    <Title>Graphic Design</Title>
    <Gallery data={graphicDesignData} />
  </MainLayout>
);

export default GraphicDesign;
