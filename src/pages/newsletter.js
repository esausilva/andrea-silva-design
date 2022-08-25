import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Subscribe } from '~components/pages/Subscribe';
import { Seo } from '~components/helpers/SEO';

const Newsletter = () => {
  return (
    <MainLayout>
      <SecondaryLayout>
        <Subscribe />
      </SecondaryLayout>
    </MainLayout>
  );
};

export default Newsletter;

export const Head = ({ location }) => (
  <Seo pageTitle="Subscribe to My Newsletter" pathName={location.pathname} />
);
