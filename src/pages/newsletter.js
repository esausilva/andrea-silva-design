import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Subscribe } from '~components/pages/Subscribe';

const Newsletter = () => {
  return (
    <MainLayout pageTitle="Subscribe to My Newsletter" pathName="subscribe">
      <SecondaryLayout>
        <Subscribe />
      </SecondaryLayout>
    </MainLayout>
  );
};

export default Newsletter;
