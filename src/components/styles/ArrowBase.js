import styled from 'styled-components';

export const ArrowBase = styled.svg`
  display: none;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: initial;
    transition: ${({ theme }) => theme.animations.transform500ms};
    &:hover {
      transform: scale(1.2);
    }
  }
`;
