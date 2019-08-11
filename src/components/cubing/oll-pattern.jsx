import * as PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { AlgPattern } from '../styled/cubing';

const tileStart = 34;
const tileSize = 44;

const OllTile = styled.rect`
  fill: ${props => (props.dir === 'F' && `yellow`) || `lightgray`};
  stroke: black;
  stroke-width: 4px;
`;

const OllSideTile = styled.rect`
  fill: yellow;
  stroke: black;
  stroke-width: 2px;
`;

/**
 * @param {string} pattern - E.g. 'LUULFRLDD'
 * @returns {React.Component}
 * @constructor
 */
const OllPattern = ({ pattern }) => {
  const p = pattern.split('');
  const svgEls = [];
  for (let i = 0; i < p.length; ++i) {
    const x = tileStart + tileSize * (i % 3);
    const y = tileStart + tileSize * Math.floor(i / 3);
    svgEls.push(
      <OllTile
        x={x}
        y={y}
        width={tileSize}
        height={tileSize}
        dir={p[i]}
        key={`${pattern}-${i}`}
      />
    );
    switch (p[i]) {
      case 'L':
        svgEls.push(
          <OllSideTile
            x={x - 11}
            y={y + 3}
            width="6"
            height={tileSize - 6}
            key={`${pattern}-${i}-side`}
          />
        );
        break;
      case 'U':
        svgEls.push(
          <OllSideTile
            x={x + 3}
            y={y - 11}
            width={tileSize - 6}
            height="6"
            key={`${pattern}-${i}-side`}
          />
        );
        break;
      case 'R':
        svgEls.push(
          <OllSideTile
            x={x + tileSize + 5}
            y={y + 3}
            width="6"
            height={tileSize - 6}
            key={`${pattern}-${i}-side`}
          />
        );
        break;
      case 'D':
        svgEls.push(
          <OllSideTile
            x={x + 3}
            y={y + tileSize + 5}
            width={tileSize - 6}
            height="6"
            key={`${pattern}-${i}-side`}
          />
        );
        break;
      default: // No-op
    }
  }
  return (
    <AlgPattern
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="200"
      height="200"
    >
      {svgEls}
    </AlgPattern>
  );
};

OllPattern.propTypes = {
  pattern: PropTypes.string.isRequired
};

export default OllPattern;
