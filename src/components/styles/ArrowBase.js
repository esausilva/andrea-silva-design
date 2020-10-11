import styled from 'styled-components';

export const ArrowBase = styled.svg`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    display: initial;
    cursor: pointer;
    transition: all 500ms;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
