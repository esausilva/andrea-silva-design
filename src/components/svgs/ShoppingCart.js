import React from 'react';
import styled from 'styled-components';

//#region Styles
const Cart = styled.svg`
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

const ShoppingCart = () => (
  <Cart xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Primary d="M7 4h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
    <Secondary d="M17.73 19a2 2 0 1 1-3.46 0H8.73a2 2 0 1 1-3.42-.08A3 3 0 0 1 5 13.17V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v10h11a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h12a1 1 0 0 1 0 2h-.27z" />
  </Cart>
);

export { ShoppingCart };
