import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import reactStringReplace from 'react-string-replace-recursively';

import {
  AlgGrid,
  AlgGridAlgs,
  AlgGridComments,
  AlgGridIdAnchor,
  AlgGridItem
} from '../../components/styled/cubing';
import { Article } from '../../components/styled/article';
import { MainContainer } from '../../components/styled/container';
import { StyledAnchor } from '../../components/styled/link';
import Layout from '../../components/layout';
import OllPattern from '../../components/cubing/oll-pattern';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';
import ollCases from '../../data/cubing/oll-cases.yaml';

const commentReplaceConfig = {
  oll: {
    pattern: /(OLL \d+)/g,
    matcherFn: (rawText, processed, key) => (
      <StyledAnchor
        as={OutboundLink}
        href={`#${rawText.replace(/^OLL /, '')}`}
        key={key}
      >
        {processed}
      </StyledAnchor>
    )
  }
};

const OllPage = () => (
  <Layout tabs={cubingTabs}>
    <MainContainer>
      <Article>
        <h1>Orient last layer algorithms</h1>
        <AlgGrid>
          {ollCases.map(ollCase => (
            <AlgGridItem key={ollCase.id}>
              <AlgGridIdAnchor
                as={OutboundLink}
                href={`#${ollCase.id}`}
                name={ollCase.id}
              >
                {ollCase.id}
              </AlgGridIdAnchor>
              <OllPattern pattern={ollCase.pattern} />
              <AlgGridAlgs>
                <b>{ollCase.alg}</b>
                <AlgGridComments>
                  {ollCase.comments.map((comment, i) => (
                    <li key={`${ollCase.id}-${i}`}>
                      <small>
                        {reactStringReplace(commentReplaceConfig)(comment)}
                      </small>
                    </li>
                  ))}
                </AlgGridComments>
              </AlgGridAlgs>
            </AlgGridItem>
          ))}
        </AlgGrid>
      </Article>
    </MainContainer>
  </Layout>
);

export default OllPage;
