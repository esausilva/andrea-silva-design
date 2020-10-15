import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

//#region Styles
const sharedFormElementsWidthMedium = '82%';
const sharedFormElementsWidthLarge = '85%';

const LetsChatSection = styled.section`
  background: ${({ theme }) => theme.pink};
  padding: 2rem;
  h2 {
    text-align: center;
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  font-size: calc(${({ theme }) => theme.fontSize} + 0.4rem);
  label {
    margin: 0.25rem 0;
    font-weight: bolder;
    color: ${({ theme }) => theme.gray};
  }
  input,
  textarea {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    color: #495057;
    margin: 0.25rem 0;
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    width: 70%;
    font-size: calc(${({ theme }) => theme.fontSizeMedium} + 0.4rem);
    label {
      text-align: right;
      margin: 0.45rem 0.35rem 0.45rem 0;
      width: 18%;
    }
    input,
    textarea {
      width: ${sharedFormElementsWidthMedium};
      margin: 0.45rem 0 0.45rem 0.55rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    font-size: calc(${({ theme }) => theme.fontSizeLarge} + 0.4rem);
    label {
      width: 15%;
      margin: 0.65rem 0.55rem 0.65rem 0;
    }
    input,
    textarea {
      width: ${sharedFormElementsWidthLarge};
      margin: 0.65rem 0 0.65rem 0.55rem;
    }
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    align-items: center;
    flex-direction: row;
  }
`;

const LetsChatButton = styled.button`
  border: 1px solid ${({ theme }) => theme.gray};
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.3rem hsla(0, 0%, 0%, 0.3);
  cursor: pointer;
  background: none;
  color: ${({ theme }) => lighten(0.1, theme.gray)};
  padding: 0.5rem 1rem;
  transition: all 500ms;
  font-size: calc(${({ theme }) => theme.fontSize} + 0.2rem);
  margin-top: 0.7rem !important;
  &:hover {
    transform: scale(1.02);
  }
  @media (min-width: ${({ theme }) => theme.breakMedium}) {
    align-self: flex-end;
    width: ${sharedFormElementsWidthMedium};
    margin: 0;
    font-size: calc(${({ theme }) => theme.fontSizeMedium} + 0.3rem);
  }
  @media (min-width: ${({ theme }) => theme.breakLarge}) {
    width: ${sharedFormElementsWidthLarge};
    font-size: calc(${({ theme }) => theme.fontSizeLarge} + 0.3rem);
  }
`;
//#endregion

const LetsChat = () => {
  return (
    <LetsChatSection>
      <h2>What can I create for you?</h2>
      <Form>
        <FormRow>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </FormRow>
        <FormRow>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter your email" />
        </FormRow>
        <FormRow>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            placeholder="Enter your message"
            rows="3"
          ></textarea>
        </FormRow>
        <LetsChatButton type="button">Let's Chat!</LetsChatButton>
      </Form>
    </LetsChatSection>
  );
};

export { LetsChat };
