import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import { Article } from '../../components/styled/article';
import { ListItem, UnorderedList } from '../../components/styled/list';
import { MainContainer } from '../../components/styled/container';
import { StyledAnchor } from '../../components/styled/link';
import Layout from '../../components/layout';
import cubingTabs from '../../data/cubing/cubing-tabs.yaml';

const CubingPage = () => (
  <Layout tabs={cubingTabs}>
    <MainContainer>
      <Article>
        <h1>Speedcubing</h1>
        <p>
          I set the world record for solving the Rubik’s cube in 2006 in 11.13
          seconds. I also set seven world records for solving the Rubik’s cube
          blindfolded.
        </p>
        <p>
          <StyledAnchor
            as={OutboundLink}
            href="https://www.worldcubeassociation.org/persons/2004LOLE01?tab=records"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official records
          </StyledAnchor>
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
          <ListItem>
            1/23/06:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="/video/2006-01-23-leyan-lo-impostor-on-letterman.mpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Late Show with David Letterman
            </StyledAnchor>
          </ListItem>
          <ListItem>
            1/24/06:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="/video/2006-01-24-tonight-show-leyan-tyson.m4v"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Tonight Show with Jay Leno
            </StyledAnchor>
          </ListItem>
          <ListItem>
            3/11/06:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="http://youtu.be/JCkI2qh1SF4"
              target="_blank"
              rel="noopener noreferrer"
            >
              1:28.82 blindfold solve world record
            </StyledAnchor>
          </ListItem>
          <ListItem>
            5/10/06:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="/video/2006-05-10-jeopardy.mpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jeopardy question
            </StyledAnchor>
          </ListItem>
          <ListItem>
            11/28/06:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="/video/2006-11-28-zefrank.m4v"
              target="_blank"
              rel="noopener noreferrer"
            >
              the show with zefrank
            </StyledAnchor>
          </ListItem>
          <ListItem>
            9/28/07:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="/video/2007-09-28-cnn-american-morning.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNN American Morning
            </StyledAnchor>
          </ListItem>
          <ListItem>
            1/16/09:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="/video/2009-01-16-abc-7.mp4"
              target="_blank"
              rel="noopener noreferrer"
            >
              ABC News
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
          <ListItem>
            1/15/06:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="https://www.cnet.com/news/record-falls-as-best-rubiks-cubers-meet-in-s-f/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNET News
            </StyledAnchor>
          </ListItem>
          <ListItem>
            1/16/06:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="http://caltechcampuspubs.library.caltech.edu/1949/1/2006_01_17_107_12.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Caltech News
            </StyledAnchor>
          </ListItem>
          <ListItem>
            2/2/07:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="/docs/pacific-citizen-article.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pacific Citizen
            </StyledAnchor>
          </ListItem>
          <ListItem>
            6/20/08:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="https://www.sfgate.com/magazine/article/Playing-for-Keeps-3207757.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              San Francisco Chronicle
            </StyledAnchor>
          </ListItem>
          <ListItem>
            1/14/09:{' '}
            <StyledAnchor
              as={OutboundLink}
              href="https://www.sfgate.com/default/article/International-Rubik-s-Cube-Competition-3176152.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              San Francisco Chronicle
            </StyledAnchor>
          </ListItem>
        </UnorderedList>
      </Article>
    </MainContainer>
  </Layout>
);

export default CubingPage;
