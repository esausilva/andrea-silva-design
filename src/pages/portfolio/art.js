import React from 'react';
import styled from 'styled-components';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~styles/SecondaryLayout';
import { Gallery } from '~components/Gallery/Gallery';
import { Title } from '~styles/Title';
import artData from '~content/art.json';

const Art = () => {
  return (
    <MainLayout pageTitle="Fine Art" pathName="portfolio/art">
      <SecondaryLayout>
        <Title>Fine Art</Title>
        <p>
          As a fine art and portrait artist, my primary medium is watercolor,
          but I also enjoy painting with oils. My inspiration comes from nature,
          travel, and the everyday moments that make life special.
        </p>
      </SecondaryLayout>
      <Gallery data={artData} />
    </MainLayout>
  );
};

export default Art;
