import React, { useEffect } from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { SecondaryLayout } from '~components/layouts/SecondaryLayout';
import { MailChimpSignupForm } from '~components/SignupForm/MailChimpSignupForm';

const Subscribe = () => {
  return (
    <MainLayout pageTitle="Subscribe to My Newsletter" pathName="subscribe">
      <SecondaryLayout>
        <MailChimpSignupForm />
      </SecondaryLayout>
    </MainLayout>
  );
};

export default Subscribe;
