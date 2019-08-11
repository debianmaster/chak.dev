import React from 'react';

import {
  AlgGrid,
  AlgGridAlgs,
  AlgGridItem
} from '../../components/styled/cubing';
import { Article } from '../../components/styled/article';
import { MainContainer } from '../../components/styled/container';
import F2lPattern from '../../components/cubing/f2l-pattern';
import Layout from '../../components/layout';
import OllPattern from '../../components/cubing/oll-pattern';
import PllPattern from '../../components/cubing/pll-pattern';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';
import intermediateCases from '../../data/cubing/intermediate-cases.yaml';

const IntermediatePage = () => (
  <Layout tabs={cubingTabs}>
    <MainContainer>
      <Article>
        <h1>Intermediate algorithms</h1>
        <p>
          Here are a few algorithms selected from the Fridrich solution that you
          can learn to improve your times after mastering the beginner’s
          solution.
        </p>

        <h2>First two layers</h2>
        <AlgGrid>
          {intermediateCases.f2l.map(f2lCase => (
            <AlgGridItem key={f2lCase.pattern}>
              <F2lPattern pattern={f2lCase.pattern} />
              <AlgGridAlgs as="b">{f2lCase.alg}</AlgGridAlgs>
            </AlgGridItem>
          ))}
        </AlgGrid>

        <h2>Orient last layer edges</h2>
        <AlgGrid>
          {intermediateCases.ollEdges.map(ollCase => (
            <AlgGridItem key={ollCase.pattern}>
              <OllPattern pattern={ollCase.pattern} />
              <AlgGridAlgs as="b">{ollCase.alg}</AlgGridAlgs>
            </AlgGridItem>
          ))}
        </AlgGrid>

        <h2>Orient last layer corners</h2>
        <AlgGrid>
          {intermediateCases.ollCorners.map(ollCase => (
            <AlgGridItem key={ollCase.pattern}>
              <OllPattern pattern={ollCase.pattern} />
              <AlgGridAlgs as="b">{ollCase.alg}</AlgGridAlgs>
            </AlgGridItem>
          ))}
        </AlgGrid>

        <h2>Permute last layer corners</h2>
        <AlgGrid>
          {intermediateCases.pllCorners.map(pllCase => (
            <AlgGridItem key={pllCase.pattern}>
              <PllPattern pattern={pllCase.pattern} />
              <AlgGridAlgs as="b">{pllCase.alg}</AlgGridAlgs>
            </AlgGridItem>
          ))}
        </AlgGrid>

        <h2>Permute last layer edges</h2>
        <AlgGrid>
          {intermediateCases.pllEdges.map(pllCase => (
            <AlgGridItem key={pllCase.pattern}>
              <PllPattern pattern={pllCase.pattern} />
              <AlgGridAlgs as="b">{pllCase.alg}</AlgGridAlgs>
            </AlgGridItem>
          ))}
        </AlgGrid>
      </Article>
    </MainContainer>
  </Layout>
);

export default IntermediatePage;
