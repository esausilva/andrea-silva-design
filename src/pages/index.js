import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <Link to="/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
