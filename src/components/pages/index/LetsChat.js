import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { useForm, ValidationError } from '@formspree/react';

import { FountainLoading } from '~svgs/FountainLoading';
import { gray, pink } from '~styles/theme';
import {
  Input,
  TextArea,
  Label,
  Fieldset,
  ThankYou,
  Notice,
} from '~styles/Form';
import { Button } from '~styles/Button';

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

const FormContainer = styled.div`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: flex;
    justify-content: center;
  }
`;

const Form = styled.form`
  margin-top: 1rem;
  font-size: calc(${({ theme }) => theme.fonts.small} + 0.2rem);
  position: relative;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 70%;
    font-size: calc(${({ theme }) => theme.fonts.medium} + 0.2rem);
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: calc(${({ theme }) => theme.fonts.large} + 0.2rem);
  }
`;

const Labels = styled(Label)`
  margin: 0.25rem 0;
  color: ${({ theme }) => theme.colors.gray};
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    text-align: right;
    margin: 0.45rem 0.35rem 0.45rem 0;
    width: 18%;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: 15%;
    margin: 0.65rem 0.55rem 0.65rem 0;
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
  margin-bottom: 0;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    align-items: center;
    flex-direction: row;
  }
`;

const LetsChatButton = styled(Button)`
  color: ${lighten(0.1, gray)};
  margin-top: 0.7rem !important;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    align-self: flex-end;
    width: ${sharedFormElementsWidthMedium};
    margin: 0;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    width: ${sharedFormElementsWidthLarge};
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
//#endregion

const LetsChat = () => {
  const [formState, handleSubmit] = useForm('lets-chat', {
    data: {
      _subject: `Website - Let's Chat`,
    },
  });

  return (
    <LetsChatSection id="nav-contact">
      <h2>What can I create for you?</h2>
      <FormContainer>
        <Form method="POST" onSubmit={handleSubmit}>
          <Fieldset disabled={formState.submitting}>
            <ThankYou show={formState.succeeded}>
              Thank you for your interest, I will be in touch with you soon.
              -Andrea
            </ThankYou>
            <FormRow>
              <Labels htmlFor="name">Name</Labels>
              <InputColumn>
                <Input
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
              <Labels htmlFor="email">Email</Labels>
              <InputColumn>
                <Input
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
              <Labels htmlFor="message">Message</Labels>
              <InputColumn>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="3"
                ></TextArea>
                <Validation
                  prefix="Message"
                  field="message"
                  errors={formState.errors}
                />
              </InputColumn>
            </FormRow>
            <LetsChatButton
              name="Let's Chat!"
              type="submit"
              $bgColor={pink}
              $border={`1px solid ${gray}`}
            >
              {formState.submitting ? <FountainLoading /> : "Let's Chat!"}
            </LetsChatButton>
          </Fieldset>
        </Form>
      </FormContainer>
    </LetsChatSection>
  );
};

export { LetsChat };
