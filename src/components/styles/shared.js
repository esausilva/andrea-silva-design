import { css } from 'styled-components';

const transition = '0.2s ease-in';

export const ImageOverlayWithIcon = css`
  position: relative;
  &:hover svg {
    opacity: 1;
  }
  &:hover img {
    filter: brightness(50%);
  }
  img {
    margin-bottom: 0;
    transition: filter ${transition};
  }
  svg {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: opacity ${transition};
  }
`;
