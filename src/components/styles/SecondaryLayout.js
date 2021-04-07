import styled from 'styled-components';

export const SecondaryLayout = styled.section`
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 90%;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: 75%;
  }
`;
