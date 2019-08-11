import styled from 'styled-components';

import { fadeUp } from './animations';
import media from './media';

export const Article = styled.article`
  padding: 16px 16px 32px;
  background: white;
  opacity: 0;
  animation: ${fadeUp} 0.75s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  ${media.desktop`
    padding: 48px 48px 96px;
  `};
`;

export const ArticleFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px -16px;
  ${media.desktop`
    margin-right: -48px;
    margin-left: -48px;
  `};
`;

export const ArticleYoutubeContainer = styled.div`
  width: 100vw;
  max-width: 560px;
  height: 56.25vw;
  max-height: 315px;
  background: black;
`;

export const ArticleYoutube = styled.iframe`
  width: 100%;
  height: 100%;

  /* base64 encoded PNG taken from YouTube */
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAwCAMAAACffixXAAAAZlBMVEUAAACAgIB/f3+AgIB/f39/f3+AgICAgICAgICAgIB/f39+fn6AgIB+fn5+fn4AAAAAAAAAAAB9fX3///9/f3////+CgoKoqKj7+/vx8fHm5ubV1dW2traenp6GhoaUlJSMjIzGxsZtMJogAAAAFHRSTlMA/O3i9a/UxDKInU0acWEBBwM/ASj5mocAAAE8SURBVHherdfZjoMwDAXQa2cjELaOu8/6/z85QyUe5oEU1T6vFVfqDSQOVlNpDt3Q59yGkFKMzjGz90QiRN57ZudiTCmENud+6A5NmfBPGXKIjpdHNvz/gciziyEPBauxSyQvodSNeMDA8jIe8NA4UXDNo9FWVNoZQMOiwg2AXpR6YA6iFGaUKDoUy7o2uvXpvCj5Dj2JEvXIokUZrWw5nb9llxZhO+R2ff+UHQJSJeR4vJ1P8lRCrIX8uX88jYlwtZDF5f4ldQ5cD1lcf6oNE9dDVvWGGX5PSL1hD9oTUm+YIDtDloa3qjEJMfk7JsWaLPGekEv9ZRM2eO3JmXyAJluByaZksz1mUcsmR4bJ4WVzjJYoSrFgDKJDYbYYcqzGrVk7+E1LiH4E1Q/DlmM5xucXBKldEFZvmqvKL34u7AfjQAeRAAAAAElFTkSuQmCC')
    center center no-repeat;
`;

export const ArticleFigcaption = styled.figcaption`
  margin-top: 8px;
  font-size: var(--fontSmall);
`;
