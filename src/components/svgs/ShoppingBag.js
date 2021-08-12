import React from 'react';
import styled from 'styled-components';

//#region Styles
const Bag = styled.svg`
  width: 6rem;
  height: 6rem;
`;

const Primary = styled.path`
  fill: #fff;
`;

const Secondary = styled.path`
  fill: ${({ theme }) => theme.colors.gray};
`;
//#endregion

const ShoppingBag = () => (
  <Bag xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Primary d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z" />
    <Secondary d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z" />
  </Bag>
);

export { ShoppingBag };
