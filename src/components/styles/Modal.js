import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 999;
  overflow: auto;
`;

export const Body = styled.section`
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1rem 3rem hsla(0, 0%, 0%, 0.3);
  padding: 1rem;
`;

export const Close = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  background: none;
  color: ${({ theme }) => theme.colors.pink};
  font-size: 5rem;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: -1.5rem;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: 6rem;
    top: -2.5rem;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: 7rem;
    top: -3rem;
  }
`;
