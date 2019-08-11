import * as PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import {
  Hero,
  HeroCard,
  HeroContent,
  HeroHr,
  HeroImage
} from '../components/styled/hero';
import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <Hero>
      <HeroCard>
        <HeroImage
          fixed={data.file.childImageSharp.fixed}
          alt="Headshot"
          style={{
            position: 'absolute'
          }}
        />
        <HeroContent>
          <h1>Leyan Lo</h1>
          <HeroHr />
          <h3>Software engineer</h3>
          <p>
            Amateur violinist
            <br />
            Former world record Rubik’s&nbsp;cube&nbsp;solver
          </p>
        </HeroContent>
      </HeroCard>
    </Hero>
  </Layout>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "headshot.jpg" }) {
          childImageSharp {
            fixed(width: 96, height: 96, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};
