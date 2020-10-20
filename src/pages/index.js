import React from 'react';
import { FormspreeProvider } from '@formspree/react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SEO } from '~helpers/SEO';
import { Work } from '~components/pages/index/Work';
import { About } from '~components/pages/index/About';
import { Testimonials } from '~components/pages/index/Testimonials';
import { InstagramFeed } from '~components/pages/index/InstagramFeed';
import { LetsChat } from '~components/pages/index/LetsChat';

const IndexPage = () => (
  <MainLayout>
    {/* <SEO title="Home" /> */}
    <Work />
    <About />
    <Testimonials />
    <InstagramFeed />
    <FormspreeProvider project={process.env.GATSBY_FORMSPREE_PROJECT_ID}>
      <LetsChat />
    </FormspreeProvider>
  </MainLayout>
);

export default IndexPage;
