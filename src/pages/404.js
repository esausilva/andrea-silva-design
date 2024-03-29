import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';
import { Seo } from '~components/helpers/SEO';

const NotFoundPage = () => (
  <MainLayout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
);

export default NotFoundPage;

export const Head = () => <Seo pageTitle="Page not found" />;
