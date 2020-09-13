import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      imperdiet est eu urna feugiat feugiat. Nullam mollis pharetra sapien et
      porttitor. Nullam venenatis sapien eu est facilisis aliquet. Sed non
      sollicitudin augue. Curabitur mi lectus, hendrerit mattis lacus sit amet,
      aliquet fringilla felis. Nunc eget augue varius, tempus nunc et, tristique
      felis. Morbi ullamcorper porta diam ut aliquet. Pellentesque arcu neque,
      tristique ut dapibus ultrices, suscipit eget metus
    </p>

    <Link to="/">Go to "Using TypeScript"</Link>

    <h2>What Andrea's Client Say</h2>
    <h3>Follow Me On Instagram</h3>
  </Layout>
);

export default IndexPage;
