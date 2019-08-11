import * as PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { AlgPattern } from '../styled/cubing';
import Point from './point';

const tileStart = 34;
const tileSize = 44;

const PllTile = styled.rect`
  fill: yellow;
  stroke: black;
  stroke-width: 4px;
`;

const PllArrow = styled.line`
  stroke: black;
  stroke-width: 2px;
`;

/**
 * @param {number[][]} pattern - E.g. [[7, 9], [9, 7]]
 * @returns {React.Component}
 * @constructor
 */
const PllPattern = ({ pattern }) => {
  const svgEls = [];
  const tileCenters = [];
  for (let i = 0; i < 9; ++i) {
    const x = tileStart + tileSize * (i % 3);
    const y = tileStart + tileSize * Math.floor(i / 3);
    svgEls.push(
      <PllTile
        x={x}
        y={y}
        width={tileSize}
        height={tileSize}
        key={`${pattern}-${i}`}
      />
    );
    tileCenters.push(new Point(x + tileSize / 2, y + tileSize / 2));
  }
  for (let i = 0; i < pattern.length; ++i) {
    const arrow = pattern[i];
    const centerStart = tileCenters[arrow[0] - 1];
    const centerEnd = tileCenters[arrow[1] - 1];
    const arrowStart = Point.lerpBy(centerStart, centerEnd, 12);
    const arrowEnd = Point.lerpBy(centerEnd, centerStart, 16);
    svgEls.push(
      <PllArrow
        x1={arrowStart.x.toFixed(2)}
        y1={arrowStart.y.toFixed(2)}
        x2={arrowEnd.x.toFixed(2)}
        y2={arrowEnd.y.toFixed(2)}
        markerEnd="url(#arrowHead)"
        key={`${pattern}-arrow-${i}`}
      />
    );
  }
  return (
    <AlgPattern
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="200"
      height="200"
    >
      <defs>
        <marker
          id="arrowHead"
          markerWidth="6"
          markerHeight="6"
          refX="0"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" />
        </marker>
      </defs>
      {svgEls}
    </AlgPattern>
  );
};

PllPattern.propTypes = {
  pattern: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  ).isRequired
};

export default PllPattern;
