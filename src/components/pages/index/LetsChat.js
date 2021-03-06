import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { useForm, ValidationError } from '@formspree/react';

import { FountainLoading } from '~svgs/FountainLoading';
import { gray } from '~styles/theme';

//#region Styles
const sharedFormElementsWidthMedium = '82%';
const sharedFormElementsWidthLarge = '85%';

const LetsChatSection = styled.section`
  background: ${({ theme }) => theme.colors.pink};
  padding: 2rem;
  h2 {
    text-align: center;
  }
`;

const Fieldset = styled.fieldset`
  width: 100%;
  border: 0;
  margin-bottom: 0;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: flex;
    justify-content: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  font-size: calc(${({ theme }) => theme.fonts.small} + 0.2rem);
  position: relative;
  label {
    margin: 0.25rem 0;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.gray};
  }
  input,
  textarea {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    color: #495057;
    width: 100%;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      outline: none;
      box-shadow: 0 0 0.23rem 0.23rem #17a2b8;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 70%;
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.2rem);
    label {
      text-align: right;
      margin: 0.45rem 0.35rem 0.45rem 0;
      width: 18%;
    }
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.large} + 0.2rem);
    label {
      width: 15%;
      margin: 0.65rem 0.55rem 0.65rem 0;
    }
  }
`;

const InputColumn = styled.div`
  width: 100%;
  margin: 0.25rem 0;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: ${sharedFormElementsWidthMedium};
    margin: 0.45rem 0 0.45rem 0.55rem;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: ${sharedFormElementsWidthLarge};
    margin: 0.65rem 0 0.65rem 0.55rem;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    align-items: center;
    flex-direction: row;
  }
`;

const LetsChatButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.3rem hsla(0, 0%, 0%, 0.3);
  cursor: pointer;
  background: none;
  color: ${lighten(0.1, gray)};
  padding: 0.5rem 1rem;
  transition: ${({ theme }) => theme.animations.transform500ms};
  font-size: calc(${({ theme }) => theme.fonts.small} + 0.2rem);
  margin-top: 0.7rem !important;
  &:hover {
    transform: scale(1.02);
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    align-self: flex-end;
    width: ${sharedFormElementsWidthMedium};
    margin: 0;
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.3rem);
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: ${sharedFormElementsWidthLarge};
    font-size: calc(${({ theme }) => theme.fonts.large} + 0.3rem);
  }
`;

const Validation = styled(ValidationError)`
  color: ${lighten(0.5, '#7c2626')};
  font-size: calc(${({ theme }) => theme.fonts.small} - 0.1rem);
  font-weight: 500;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: calc(${({ theme }) => theme.fonts.medium} - 0.1rem);
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.large} - 0.1rem);
  }
`;

const ThankYou = styled.mark`
  margin: 1rem 0;
  padding: 0.8rem;
  background: #d4edda;
  color: #155724;
  border: 1px solid transparent;
  border-color: #c3e6cb;
  border-radius: 0.25rem;
  text-align: center;
  display: ${({ show }) => (show ? 'inline-block' : 'none')};
`;
//#endregion

const LetsChat = () => {
  const [formState, handleSubmit] = useForm('lets-chat', {
    data: {
      _subject: `Andrea Silva Design - New Submission`,
    },
  });

  return (
    <LetsChatSection id="nav-contact">
      <h2>What can I create for you?</h2>
      <Fieldset disabled={formState.submitting}>
        <Form method="POST" onSubmit={handleSubmit}>
          <ThankYou show={formState.succeeded}>
            Thank you for your interest, I will be in touch with you soon.
            -Andrea
          </ThankYou>
          <FormRow>
            <label htmlFor="name">Name</label>
            <InputColumn>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
              <Validation
                prefix="Name"
                field="name"
                errors={formState.errors}
              />
            </InputColumn>
          </FormRow>
          <FormRow>
            <label htmlFor="email">Email</label>
            <InputColumn>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <Validation
                prefix="Email"
                field="email"
                errors={formState.errors}
              />
            </InputColumn>
          </FormRow>
          <FormRow>
            <label htmlFor="message">Message</label>
            <InputColumn>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="3"
              ></textarea>
              <Validation
                prefix="Message"
                field="message"
                errors={formState.errors}
              />
            </InputColumn>
          </FormRow>
          <LetsChatButton type="submit">
            {formState.submitting ? <FountainLoading /> : "Let's Chat!"}
          </LetsChatButton>
        </Form>
      </Fieldset>
    </LetsChatSection>
  );
};

export { LetsChat };
