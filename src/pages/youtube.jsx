import React from 'react';

import {
  Article,
  ArticleFigcaption,
  ArticleFigure,
  ArticleYoutube,
  ArticleYoutubeContainer
} from '../components/styled/article';
import { MainContainer } from '../components/styled/container';
import Layout from '../components/layout';

const YoutubePage = () => (
  <Layout>
    <MainContainer>
      <Article>
        <h1>Openshift</h1>
        <p>
          I have recorded several Openshift Tutorials.
        </p>
        <ArticleFigure>
          <ArticleYoutubeContainer>
            <ArticleYoutube
              title="Knative Installation on Openshift 3.11"
              src="https://www.youtube.com/watch?v=g-3C7-dRehE"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            
          </ArticleYoutubeContainer>
          <ArticleFigcaption>Knative Installation on Openshift 3.11</ArticleFigcaption>
        </ArticleFigure>
      </Article>
    </MainContainer>
  </Layout>
);

export default YoutubePage;
