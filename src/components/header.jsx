import * as PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'styled-components';

import { Container } from './styled/container';
import { StyledAnchor } from './styled/link';
import HeaderEmailIcon from '../images/header-email.svg';
import HeaderGithubIcon from '../images/header-github.svg';
import HeaderLinkedinIcon from '../images/header-linkedin.svg';
import HeaderTwitterIcon from '../images/header-twitter.svg';
import LogoIcon from '../images/logo.svg';
import Navbar from './navbar';
import media from './styled/media';

const StyledHeader = styled.header`
  padding-right: var(--safeAreaInsetRight);
  padding-left: var(--safeAreaInsetLeft);
  background: white;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: var(--headerHeight);
`;

const HeaderGap = styled.div`
  flex-grow: 1;
`;

const HeaderIconWrapper = styled(StyledAnchor)`
  display: flex;
  align-items: center;
  height: 100%;
  fill: var(--darkGray);
`;

const HeaderIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin: auto 8px;
  opacity: 0.8;
  ${media.desktop`
    margin: auto 12px;
  `};
`;

const BrandAnchor = styled(StyledAnchor)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const BrandLogo = styled(LogoIcon)`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  opacity: 0.8;
  ${media.desktop`
    margin-left: 8px;
  `};
`;

const BrandTitle = styled.span`
  display: flex;
  align-items: center;
  margin: 0;
  color: var(--darkGray);
  font-weight: 600;
  font-size: var(--fontLarge);
  ${media.desktop`
    margin: 0 32px 0 0;
  `};
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContainer>
      <BrandAnchor as={Link} to="/">
        <BrandLogo />
        <BrandTitle>{siteTitle}</BrandTitle>
      </BrandAnchor>
      <Navbar />
      <HeaderGap />
      <HeaderIconWrapper
        as={OutboundLink}
        href="https://twitter.com/leyanlo"
        title="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HeaderIcon as={HeaderTwitterIcon} />
      </HeaderIconWrapper>
      <HeaderIconWrapper
        href="https://github.com/leyanlo"
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HeaderIcon as={HeaderGithubIcon} />
      </HeaderIconWrapper>
      <HeaderIconWrapper
        href="https://www.linkedin.com/in/leyanlo/"
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HeaderIcon as={HeaderLinkedinIcon} />
      </HeaderIconWrapper>
      <HeaderIconWrapper
        href="mailto:leyanlo@gmail.com"
        title="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HeaderIcon as={HeaderEmailIcon} />
      </HeaderIconWrapper>
    </HeaderContainer>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.node.isRequired
};

export default Header;
