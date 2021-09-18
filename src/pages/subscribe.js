import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { Subscribe as SubscribeComponent } from '~components/pages/Subscribe';

const Subscribe = () => {
  return (
    <MainLayout pageTitle="Subscribe to My Newsletter" pathName="subscribe">
      <SecondaryLayout>
        <SubscribeComponent />
      </SecondaryLayout>
    </MainLayout>
  );
};

export default Subscribe;
