import Img from 'gatsby-image';
import styled from 'styled-components';

import { fadeForward, fadeUp } from './animations';

export const Hero = styled.div`
  --heroImageSize: 96px;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: var(--mainMinHeight);
  text-align: center;
  background-color: var(--bodyBackground);
`;

export const HeroCard = styled.div`
  position: relative;
  margin: calc(0.5 * var(--heroImageSize) + 16px) 8px;
  padding: calc(0.5 * var(--heroImageSize) + 16px) 32px 32px;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 5px var(--xLightGray);
`;

export const HeroImage = styled(Img)`
  position: absolute;
  top: calc(-0.5 * var(--heroImageSize));
  right: 0;
  left: 0;
  width: var(--heroImageSize);
  height: var(--heroImageSize);
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 0 2px white;
  opacity: 0;
  animation: ${fadeForward} 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
`;

export const HeroContent = styled.div`
  opacity: 0;
  animation: ${fadeUp} 0.75s cubic-bezier(0.19, 1, 0.22, 1) forwards 0.1s;
`;

export const HeroHr = styled.hr`
  margin: 0 0 24px;
  border: none;
  border-bottom: 1px solid var(--lightGray);
`;
