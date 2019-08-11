import styled from 'styled-components';

import media from './media';

export const UnorderedList = styled.ul`
  padding-left: 20px;
  ${media.desktop`
    padding-left: 40px;
  `};
`;

export const ListItem = styled.li`
  padding-bottom: 0.25em;
`;
