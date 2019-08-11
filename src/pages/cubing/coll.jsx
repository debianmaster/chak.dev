import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import reactStringReplace from 'react-string-replace-recursively';

import {
  AlgGrid,
  AlgGridAlgs,
  AlgGridCollIdAnchor,
  AlgGridComments,
  AlgGridItem
} from '../../components/styled/cubing';
import { Article } from '../../components/styled/article';
import { MainContainer } from '../../components/styled/container';
import { StyledAnchor } from '../../components/styled/link';
import CollPattern from '../../components/cubing/coll-pattern';
import Layout from '../../components/layout';
import collCases from '../../data/cubing/coll-cases.yaml';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';

const commentReplaceConfig = {
  f2l: {
    pattern: /(F2L \d+)/g,
    matcherFn: (rawText, processed, key) => (
      <StyledAnchor
        as={Link}
        to={`/cubing/f2l/#${rawText.replace(/^F2L /, '')}`}
        key={key}
      >
        {processed}
      </StyledAnchor>
    )
  },
  oll: {
    pattern: /(OLL \d+)/g,
    matcherFn: (rawText, processed, key) => (
      <StyledAnchor
        as={Link}
        to={`/cubing/oll/#${rawText.replace(/^OLL /, '')}`}
        key={key}
      >
        {processed}
      </StyledAnchor>
    )
  },
  coll: {
    pattern: /(COLL \D+\d)/g,
    matcherFn: (rawText, processed, key) => (
      <StyledAnchor
        as={OutboundLink}
        href={`#${rawText.replace(/^COLL /, '')}`}
        key={key}
      >
        {processed}
      </StyledAnchor>
    )
  }
};

const CollPage = () => (
  <Layout tabs={cubingTabs}>
    <MainContainer>
      <Article>
        <h1>Orient last layer algorithms</h1>
        <AlgGrid>
          {collCases.map(collCase => (
            <AlgGridItem key={collCase.id}>
              <AlgGridCollIdAnchor
                as={OutboundLink}
                href={`#${collCase.id}`}
                name={collCase.id}
              >
                {collCase.id}
              </AlgGridCollIdAnchor>
              <CollPattern pattern={collCase.pattern} />
              <AlgGridAlgs>
                <b>{collCase.alg}</b>
                <AlgGridComments>
                  {collCase.comments.map((comment, i) => (
                    <li key={`${collCase.id}-${i}`}>
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

export default CollPage;
