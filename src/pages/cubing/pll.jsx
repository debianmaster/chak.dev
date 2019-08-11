import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import {
  AlgGrid,
  AlgGridAlgs,
  AlgGridComments,
  AlgGridItem,
  AlgGridPllIdAnchor
} from '../../components/styled/cubing';
import { Article } from '../../components/styled/article';
import { MainContainer } from '../../components/styled/container';
import Layout from '../../components/layout';
import PllPattern from '../../components/cubing/pll-pattern';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';
import pllCases from '../../data/cubing/pll-cases.yaml';

const PllPage = () => (
  <Layout tabs={cubingTabs}>
    <MainContainer>
      <Article>
        <h1>Permute last layer algorithms</h1>
        <AlgGrid>
          {pllCases.map(pllCase => (
            <AlgGridItem key={pllCase.pattern}>
              <AlgGridPllIdAnchor
                as={OutboundLink}
                href={`#${pllCase.id}`}
                name={pllCase.id}
              >
                {pllCase.id}
              </AlgGridPllIdAnchor>
              <PllPattern pattern={pllCase.pattern} />
              <AlgGridAlgs>
                <b>{pllCase.alg}</b>
                <AlgGridComments>
                  {pllCase.comments.map((comment, i) => (
                    <li key={`${pllCase.id}-${i}`}>
                      <small>{comment} </small>
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

export default PllPage;
