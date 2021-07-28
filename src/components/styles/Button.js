import styled from 'styled-components';
import { darken } from 'polished';

import { pink } from '~styles/theme';

export const Button = styled.button`
  border: ${({ $border }) => $border ?? 'none'};
  border-radius: 0.5rem;
  font-weight: 400;
  padding: 0.8rem;
  cursor: pointer;
  box-shadow: 0 0.1rem 0.3rem hsla(0, 0%, 0%, 0.3);
  font-size: calc(${({ theme }) => theme.fonts.small} + 0.2rem);
  background-color: ${({ $bgColor, theme }) => $bgColor ?? theme.colors.pink};
  width: 100%;
  margin-top: 1rem;
  color: ${({ $textColor }) => $textColor ?? '#fff'};
  transition: ${({ theme }) => theme.animations.transform500ms};
  &:active,
  :hover {
    background-color: ${({ $bgColor }) => darken(0.04, $bgColor ?? pink)};
  }
  &:active {
    transform: scale(0.99);
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.3rem);
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.large} + 0.3rem);
  }
`;
