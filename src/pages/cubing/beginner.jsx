import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import { Article } from '../../components/styled/article';
import { MainContainer } from '../../components/styled/container';
import { StyledAnchor, StyledAnchorIcon } from '../../components/styled/link';
import FileIcon from '../../images/icon-file.svg';
import Layout from '../../components/layout';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';

const BeginnerPage = () => (
  <Layout tabs={cubingTabs}>
    <MainContainer>
      <Article>
        <h1>Beginner solution</h1>
        <p>
          I wrote a four page PDF detailing a layer by layer solution of the
          Rubik’s cube.
        </p>
        <p>
          <StyledAnchor as={OutboundLink} href="/docs/cube-solution.pdf">
            <StyledAnchorIcon as={FileIcon} />
            Download my beginner solution
          </StyledAnchor>
        </p>
        <p>
          <small>Last updated September 14, 2008.</small>
        </p>
      </Article>
    </MainContainer>
  </Layout>
);

export default BeginnerPage;
