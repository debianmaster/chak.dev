import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import { Article } from '../../components/styled/article';
import { ListItem, UnorderedList } from '../../components/styled/list';
import { MainContainer } from '../../components/styled/container';
import { StyledAnchor } from '../../components/styled/link';
import Layout from '../../components/layout';
import cubingTabs from '../../data/conferences/conferences-tabs.yaml';

const CubingPage = () => (
  <Layout tabs={cubingTabs}>
    <MainContainer>
      <Article>
        <h1>Meetups</h1>
        <p>
          I have done several meetups in different cities.
        </p>
        <h2>Videos</h2>
        <UnorderedList>
          <ListItem>
            1/14/06:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="http://youtu.be/uNBFGl7ErJE"
              target="_blank"
              rel="noopener noreferrer"
            >
              11.13 second speedsolve world record
            </StyledAnchor>
          </ListItem>
        </UnorderedList>
        <h2>Articles</h2>
        <UnorderedList>
          <ListItem>
            6/1/05:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="http://www.wired.com/wired/archive/13.06/posts.html?pg=5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wired Magazine
            </StyledAnchor>
          </ListItem>
        </UnorderedList>
      </Article>
    </MainContainer>
  </Layout>
);

export default CubingPage;
