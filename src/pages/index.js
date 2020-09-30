import React from 'react';

import { MainLayout } from '../components/layouts/MainLayout';
import { SEO } from '../components/helpers/SEO';
import { Work } from '../components/Work';
import { About } from '../components/About';

const IndexPage = () => (
  <MainLayout>
    {/* <SEO title="Home" /> */}
    <Work />
    <About />
  </MainLayout>
);

export default IndexPage;
