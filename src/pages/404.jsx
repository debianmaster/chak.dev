import React from 'react';

import { Article } from '../components/styled/article';
import { MainContainer } from '../components/styled/container';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <MainContainer>
      <Article>
        <h1>Page not found</h1>
        <p>
          <span role="img" aria-label="sadface">
            😢
          </span>
        </p>
      </Article>
    </MainContainer>
  </Layout>
);

export default NotFoundPage;
