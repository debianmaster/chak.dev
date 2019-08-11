import { keyframes } from 'styled-components';

export const fadeForward = keyframes`
  from {
    transform: scale(0.75);
    opacity: 0.75;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const fadeUp = keyframes`
  from {
    transform: translateY(8px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
