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
          <ListItem>Designing coherent UX systems</ListItem>
          <ListItem>Making applications responsive and accessible</ListItem>
          <ListItem>Refactoring codebases</ListItem>
          <ListItem>Streamlining build systems</ListItem>
          <ListItem>Debugging minified code</ListItem>
        </UnorderedList>
        <p>
          <StyledAnchor
            as={OutboundLink}
            href="/docs/leyan-lo-resume-2018-03-21.pdf"
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
