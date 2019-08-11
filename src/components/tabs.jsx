import * as PropTypes from 'prop-types';
import { Location, navigate } from '@reach/router';
import React from 'react';
import styled from 'styled-components';

import { StyledAnchor } from './styled/link';
import media from './styled/media';

const StyledTabs = styled.ul`
  display: flex;
  width: 100%;
  height: var(--tabsHeight);
  margin: 0;
  padding: 0 var(--safeAreaInsetRight) 0 var(--safeAreaInsetLeft);
  overflow-x: scroll;
  white-space: nowrap;
  list-style-type: none;
  background-color: var(--navbarBackground);
  -webkit-overflow-scrolling: touch;

  ::after {
    position: absolute;
    top: calc(var(--headerHeight) - 1px);
    left: 0;
    width: 100%;
    height: calc(var(--tabsHeight) - 1px);
    background-image: linear-gradient(
      to right,
      var(--navbarBackground),
      var(--navbarBackgroundTransparent) 16px,
      var(--navbarBackgroundTransparent) calc(100vw - 16px),
      var(--navbarBackground)
    );
    pointer-events: none;
    content: '';
  }

  ${media.desktop`
    overflow-x: visible;
    justify-content: center;

    ::after {
      display: none;
    }
  `};
`;

const TabLink = styled(StyledAnchor)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 16px;
  color: var(--mediumGray);
  font-size: var(--fontSmall);
  transition: opacity 500ms cubic-bezier(0.19, 1, 0.22, 1),
    box-shadow 500ms cubic-bezier(0.19, 1, 0.22, 1);
  ${props =>
    props.active
      ? `
          color: var(--linkColor);
          box-shadow: inset 0 -1px 0 0 var(--linkColor);
        `
      : ``};
  ${media.nonTouchscreen`
    :hover {
      box-shadow: inset 0 -1px 0 0 var(--mediumGray);
    }
  `};
`;

function onClick(e) {
  e.preventDefault();
  navigate(new URL(e.target.href).pathname, {
    state: {
      tabsScrollLeft: document.getElementsByClassName(
        StyledTabs.styledComponentId
      )[0].scrollLeft
    }
  });
}

const Tabs = ({ tabs }) => (
  <Location>
    {({ location }) => {
      const activeTabRef = React.createRef();

      // document is not defined during build
      if (typeof document !== 'undefined') {
        setTimeout(() => {
          // Hack until this is resolved: https://github.com/gatsbyjs/gatsby/issues/5773
          let scrollLeft;
          if (location.state) {
            scrollLeft = location.state.tabsScrollLeft;
          } else if (activeTabRef) {
            scrollLeft = activeTabRef.current.offsetLeft;
          } else {
            scrollLeft = 0;
          }
          document.getElementsByClassName(
            StyledTabs.styledComponentId
          )[0].scrollLeft = scrollLeft;
        });
      }

      return (
        <StyledTabs>
          {tabs &&
            tabs.map(tab => (
              <li key={tab.to}>
                <TabLink
                  href={tab.to}
                  {...(tab.to === location.pathname
                    ? {
                        active: true,
                        ref: activeTabRef
                      }
                    : {})}
                  onClick={onClick}
                >
                  {tab.title}
                </TabLink>
              </li>
            ))}
        </StyledTabs>
      );
    }}
  </Location>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Tabs;
