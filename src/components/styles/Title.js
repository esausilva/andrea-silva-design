import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    text-align: left;
  }
`;

export const LandingTitle = styled.h1`
  color: #fff;
  text-shadow: ${({ theme }) => theme.fonts.textShadow};
  font-size: 3rem;
  font-weight: 600;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: 4rem;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: 5.5rem;
  }
`;
