import React from 'react';

import { MainLayout } from '../components/layouts/MainLayout';
import { SEO } from '../components/helpers/SEO';
import { Work } from '../components/Work';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { InstagramFeed } from '../components/InstagramFeed';

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
