import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import { Article } from '../components/styled/article';
import { ListItem, UnorderedList } from '../components/styled/list';
import { MainContainer } from '../components/styled/container';
import { StyledAnchor, StyledAnchorIcon } from '../components/styled/link';
import FileIcon from '../images/icon-file.svg';
import Layout from '../components/layout';

const SoftwarePage = () => (
  <Layout>
    <MainContainer>
      <Article>
        <h1>Software engineer</h1>
        <p>I like making things! My interests include:</p>
        <UnorderedList>
          <ListItem>Full stack developer</ListItem>
          <ListItem>Openshift Field Consultant</ListItem>
          <ListItem>Youtuber</ListItem>
          <ListItem>Product Management</ListItem>
        </UnorderedList>
        <p>
          <StyledAnchor
            as={OutboundLink}
            href="/docs/chak.pdf"
          >
            <StyledAnchorIcon as={FileIcon} />
            Download my resume
          </StyledAnchor>
        </p>
      </Article>
    </MainContainer>
  </Layout>
);

export default SoftwarePage;
