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

const ViolinPage = () => (
  <Layout>
    <MainContainer>
      <Article>
        <h1>Amateur violinist</h1>
        <p>
          I enjoy playing chamber music with friends, and sometimes I fall
          asleep at concerts.
        </p>
        <ArticleFigure>
          <ArticleYoutubeContainer>
            <ArticleYoutube
              title="Pinky Quartet plays Brahms Quartet in G minor, Op. 25 (iv. Rondo alla Zingarese)"
              src="https://www.youtube-nocookie.com/embed/P_HpJasVeT4?rel=0"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </ArticleYoutubeContainer>
          <ArticleFigcaption>2017 SLSQ Seminar at Stanford</ArticleFigcaption>
        </ArticleFigure>
      </Article>
    </MainContainer>
  </Layout>
);

export default ViolinPage;
