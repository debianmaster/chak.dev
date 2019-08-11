import * as PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { AlgPattern } from '../styled/cubing';

const tileStart = 34;
const tileSize = 44;

const collColor = {
  W: 'white',
  R: 'red',
  B: '#00abff',
  O: 'orange',
  G: 'lawngreen',
  Y: 'yellow'
};

const CollTile = styled.rect`
  fill: ${props => collColor[props.color] || `lightgray`};
  stroke: black;
  stroke-width: 4px;
`;

const CollSideTile = styled(CollTile)`
  stroke-width: 2px;
`;

/**
 * @param {Object[]} pattern - E.g. [
 *   { label: 'B', color: 'G', leftColor: 'Y' },
 *   { label: 'B', color: 'G', rightColor: 'Y' },
 *   { label: 'F', color: 'Y', bottomColor: 'B' },
 *   { label: 'F', color: 'Y', bottomColor: 'B' }
 * ]
 * @returns {React.Component}
 * @constructor
 */
const CollPattern = ({ pattern }) => {
  const [topLeft, topRight, bottomLeft, bottomRight] = pattern;
  const svgEls = [];
  for (let i = 0; i < 9; ++i) {
    const x = tileStart + tileSize * (i % 3);
    const y = tileStart + tileSize * Math.floor(i / 3);

    // Draw tile
    let corner;
    switch (i) {
      case 0:
        corner = topLeft;
        break;
      case 2:
        corner = topRight;
        break;
      case 6:
        corner = bottomLeft;
        break;
      case 8:
        corner = bottomRight;
        break;
      default:
        corner = { color: 'Y' };
    }
    svgEls.push(
      <CollTile
        x={x}
        y={y}
        width={tileSize}
        height={tileSize}
        color={corner.color}
        key={`${i}`}
      />
    );

    // Draw label
    if (corner.label) {
      if (corner.label.length === 1) {
        svgEls.push(
          <text
            x={x + tileSize / 2}
            y={y + tileSize / 2}
            dx={-1}
            dy={12}
            fontSize={36}
            fontWeight={600}
            textAnchor="middle"
            key={`${i}-label`}
          >
            {corner.label}
          </text>
        );
      } else if (corner.label.length === 2) {
        svgEls.push(
          <text
            x={x + tileSize / 4}
            y={y + (tileSize * 3) / 4}
            dy={5}
            fontSize={24}
            textAnchor="middle"
            key={`${i}-label-bottomLeft`}
          >
            {corner.label.charAt(0)}
          </text>
        );
        svgEls.push(
          <text
            x={x + (tileSize * 3) / 4}
            y={y + tileSize / 4}
            dy={10}
            fontSize={24}
            textAnchor="middle"
            key={`${i}-label-topRight`}
          >
            {corner.label.charAt(1)}
          </text>
        );
      }
    }

    // Draw side
    if (corner.leftColor) {
      svgEls.push(
        <CollSideTile
          x={x - 11}
          y={y + 3}
          width={6}
          height={tileSize - 6}
          color={corner.leftColor}
          key={`${i}-left`}
        />
      );
    }

    if (corner.topColor) {
      svgEls.push(
        <CollSideTile
          x={x + 3}
          y={y - 11}
          width={tileSize - 6}
          height={6}
          color={corner.topColor}
          key={`${i}-top`}
        />
      );
    }

    if (corner.rightColor) {
      svgEls.push(
        <CollSideTile
          x={x + tileSize + 5}
          y={y + 3}
          width={6}
          height={tileSize - 6}
          color={corner.rightColor}
          key={`${i}-right`}
        />
      );
    }

    if (corner.bottomColor) {
      svgEls.push(
        <CollSideTile
          x={x + 3}
          y={y + tileSize + 5}
          width={tileSize - 6}
          height={6}
          color={corner.bottomColor}
          key={`${i}-bottom`}
        />
      );
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

CollPattern.propTypes = {
  pattern: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      color: PropTypes.string.isRequired,
      topColor: PropTypes.string,
      rightColor: PropTypes.string,
      bottomColor: PropTypes.string,
      leftColor: PropTypes.string
    }).isRequired
  ).isRequired
};

export default CollPattern;
