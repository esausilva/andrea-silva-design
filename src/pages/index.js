import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SEO } from '~helpers/SEO';
import { Work } from '~components/pages/index/Work';
import { About } from '~components/pages/index/About';
import { Testimonials } from '~components/pages/index/Testimonials';
import { InstagramFeed } from '~components/pages/index/InstagramFeed';

const IndexPage = () => (
  <MainLayout>
    {/* <SEO title="Home" /> */}
    <Work />
    <About />
    <Testimonials />
    <InstagramFeed />
  </MainLayout>
);

export default IndexPage;
