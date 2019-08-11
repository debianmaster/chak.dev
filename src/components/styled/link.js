import styled from 'styled-components';

import media from './media';

export const StyledAnchor = styled.a`
  color: var(--linkColor);
  text-decoration: none;
  transition: opacity 500ms cubic-bezier(0.19, 1, 0.22, 1);
  fill: var(--linkColor);

  /* Link children should not also be tap targets */
  > * {
    pointer-events: none;
  }

  ${media.nonTouchscreen`
    :hover {
      opacity: 0.6;
    }
  `};
`;

export const StyledAnchorIcon = styled.svg`
  width: 16px;
  height: 16px;
  margin: 2px 4px 2px 2px;
  vertical-align: text-bottom;
`;
