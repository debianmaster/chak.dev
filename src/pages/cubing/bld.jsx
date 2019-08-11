import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import {
  AlgGrid,
  AlgGridBldAlgs,
  AlgGridBldId,
  AlgGridBldItem
} from '../../components/styled/cubing';
import { Article } from '../../components/styled/article';
import { ListItem } from '../../components/styled/list';
import { MainContainer } from '../../components/styled/container';
import { StyledAnchor } from '../../components/styled/link';
import Layout from '../../components/layout';
import bldCases from '../../data/cubing/bld-cases.yaml';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';

const BldPage = () => (
  <Layout tabs={cubingTabs}>
    <MainContainer>
      <Article>
        <h1>Blindfold cubing</h1>
        <p>
          For an in-depth tutorial on blindfold cubing, please see{' '}
          <StyledAnchor
            as={OutboundLink}
            href="http://cubefreak.net/bld/3op_guide.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shotaro (Macky) Makisumi’s guide
          </StyledAnchor>
          . Below, I have compiled all the algorithms I use for blindfold
          cubing.
        </p>
        {bldCases.map(section => (
          <section key={section.header}>
            <h2>{section.header}</h2>
            <AlgGrid>
              {section.cases.map(bldCase => (
                <AlgGridBldItem key={bldCase.id}>
                  <AlgGridBldId>{bldCase.id}</AlgGridBldId>
                  <AlgGridBldAlgs>
                    {bldCase.algs.map((alg, i) => (
                      <ListItem key={`${bldCase.id}-${i}`}>
                        <b>{alg}</b>
                      </ListItem>
                    ))}
                  </AlgGridBldAlgs>
                </AlgGridBldItem>
              ))}
            </AlgGrid>
          </section>
        ))}
      </Article>
    </MainContainer>
  </Layout>
);

export default BldPage;
