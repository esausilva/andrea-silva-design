import React from 'react';

import { MainLayout } from '../components/layouts/MainLayout';
import { SEO } from '../components/helpers/SEO';
import { Work } from '../components/Work';

const IndexPage = () => (
  <MainLayout>
    {/* <SEO title="Home" /> */}
    <Work />
  </MainLayout>
);

export default IndexPage;
