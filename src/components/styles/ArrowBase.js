import styled from 'styled-components';

export const ArrowBase = styled.svg`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    display: initial;
    transition: ${({ theme }) => theme.transform500ms};
    &:hover {
      transform: scale(1.2);
    }
  }
`;
