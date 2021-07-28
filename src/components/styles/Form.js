import styled, { css } from 'styled-components';

const inputs = css`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  color: #495057;
  width: 100%;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0.23rem 0.23rem #17a2b8;
  }
`;

export const Input = styled.input`
  ${inputs}
`;

export const TextArea = styled.textarea`
  ${inputs}
`;

export const Checkbox = styled.input`
  margin-right: 1rem;
`;

export const Label = styled.label`
  font-weight: 400;
`;

export const Fieldset = styled.fieldset`
  width: 100%;
  border: 0;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 1rem;
  }
`;

export const ErrorValidation = styled.div`
  font-size: 80%;
  color: ${({ theme }) => theme.colors.error};
  display: inline-block;
  margin-left: 0.5rem;
  div {
    display: inline-block;
    margin-left: 0.5rem;
  }
`;

export const ThankYou = styled.mark`
  margin: 1rem 0;
  padding: 0.8rem;
  background: #d4edda;
  color: #155724;
  border: 1px solid transparent;
  border-color: #c3e6cb;
  border-radius: 0.5rem;
  text-align: center;
  display: ${({ show }) => (show ? 'inline-block' : 'none')};
`;
