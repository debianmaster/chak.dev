import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import {
  AlgGrid,
  AlgGridAlgs,
  AlgGridIdAnchor,
  AlgGridItem
} from '../../components/styled/cubing';
import { Article } from '../../components/styled/article';
import { MainContainer } from '../../components/styled/container';
import F2lPattern from '../../components/cubing/f2l-pattern';
import Layout from '../../components/layout';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';
import f2lCases from '../../data/cubing/f2l-cases.yaml';

const F2LPage = () => (
  <Layout tabs={cubingTabs}>
    <MainContainer>
      <Article>
        <h1>First two layers algorithms</h1>
        <AlgGrid>
          {f2lCases.map(f2lCase => (
            <AlgGridItem key={f2lCase.id}>
              <AlgGridIdAnchor
                as={OutboundLink}
                href={`#${f2lCase.id}`}
                name={f2lCase.id}
              >
                {f2lCase.id}
              </AlgGridIdAnchor>
              <F2lPattern pattern={f2lCase.pattern} />
              <AlgGridAlgs>
                {f2lCase.algs.map((alg, i) => (
                  <li key={`${f2lCase.id}-${i}`}>
                    <b>{alg}</b>
                  </li>
                ))}
              </AlgGridAlgs>
            </AlgGridItem>
          ))}
        </AlgGrid>
      </Article>
    </MainContainer>
  </Layout>
);

export default F2LPage;
