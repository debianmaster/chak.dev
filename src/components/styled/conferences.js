import styled, { css } from 'styled-components';

import { StyledAnchor } from './link';

export const AlgGrid = styled.div`
  /* Just enough so you can fit two on a landscape iPhone X */
  --maxGridWidth: 692px;

  display: flex;
  flex-wrap: wrap;
  max-width: var(--maxGridWidth);
  margin: 0 auto 32px;
`;

export const AlgGridItem = styled.div`
  display: flex;
  flex-basis: calc(var(--maxGridWidth) / 2);
  align-items: center;
  margin-bottom: 8px;
`;

export const AlgGridBldItem = styled(AlgGridItem)`
  align-items: normal;
`;

const algGridIdStyles = css`
  flex-shrink: 0;

  /* Set flex-basis to smallest possible that can fit all ids */
  flex-basis: 16px;
  margin-left: 8px;
  text-align: right;
`;

export const AlgGridId = styled.span`
  ${algGridIdStyles};
`;

export const AlgGridIdAnchor = styled(StyledAnchor)`
  ${algGridIdStyles};
`;

export const AlgGridPllIdAnchor = styled(AlgGridIdAnchor)`
  flex-basis: 32px;
`;

export const AlgGridCollIdAnchor = styled(AlgGridIdAnchor)`
  flex-basis: 20px;
`;

export const AlgGridBldId = styled(AlgGridId)`
  flex-basis: 72px;
`;

export const AlgGridAlgs = styled.div`
  margin: 0 0 0 8px;
  padding: 0;
  font-size: var(--fontLarge);
  list-style: none;
`;

export const AlgGridBldAlgs = styled(AlgGridAlgs)`
  padding-left: 20px;
  list-style: disc;
`;

export const AlgGridComments = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const AlgPattern = styled.svg`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
`;
