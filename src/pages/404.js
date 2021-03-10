import React from 'react';

import { MainLayout } from '~components/layouts/MainLayout';

const NotFoundPage = () => (
  <MainLayout pageTitle="Page not found">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
);

export default NotFoundPage;
