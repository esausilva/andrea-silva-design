import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    text-align: left;
  }
`;
