import React, { useReducer } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import { darken } from 'polished';

import { pink } from '~styles/theme';

//#region Styles
const danger = '#dc3545';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  label {
    font-weight: 400;
    span {
      color: ${danger};
    }
  }
  * {
    margin-bottom: 1rem;
  }
  input {
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 0.5rem;
  }
  button {
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.pink};
    border: none;
    border-radius: 0.5rem;
    color: #fff;
    font-weight: 400;
    padding: 0.8rem;
    cursor: pointer;
    box-shadow: 0 0.1rem 0.3rem hsla(0, 0%, 0%, 0.3);
    font-size: calc(${({ theme }) => theme.fonts.small} + 0.2rem);
    &:active {
      background-color: ${darken(0.04, pink)};
    }
    @media (min-width: ${({ theme }) => theme.media.medium}) {
      font-size: calc(${({ theme }) => theme.fonts.medium} + 0.3rem);
    }
    @media (min-width: ${({ theme }) => theme.media.large}) {
      font-size: calc(${({ theme }) => theme.fonts.large} + 0.3rem);
    }
  }
`;

const Title = styled.h4`
  align-self: center;
  font-size: 1.9rem;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    font-size: 2.2rem;
  }
  @media (min-width: ${({ theme }) => theme.media.large}) {
    font-size: 2.6rem;
  }
`;
//#endregion

const initialFormState = {
  email: '',
  fname: '',
  lname: '',
  mcMessage: null,
  errors: {
    email: null,
    fname: null,
    lname: null,
  },
};

const formReducer = (state, { name, value, reset }) => {
  if (reset) return { ...initialFormState, mcMessage: value };

  return {
    ...state,
    [name]: value,
  };
};

const MailChimpSignupForm = () => {
  const [formData, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ name, value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { errors, hasErrors } = emptyValidation(formData);
    dispatch({ name: 'errors', value: errors });

    if (hasErrors) return;

    const { email, fname, lname } = formData;

    addToMailchimp(email, {
      FNAME: fname,
      LNAME: lname,
    })
      .then(({ result, msg }) => {
        if (result === 'error') {
          const value = `<p style="color:${danger};">${msg}</p>`;
          dispatch({ name: 'mcMessage', value });
        } else {
          const value = `<p style="color:#28a745;">${msg}</p>`;
          dispatch({ name: 'mcMessage', value, reset: true });
        }
      })
      .catch(err => alert(err));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Subscribe to my Newsletter</Title>
      <p>
        Bacon ipsum dolor amet t-bone shank strip steak brisket, ham pork loin
        doner cow drumstick tail pork belly tongue tri-tip tenderloin turkey.
      </p>
      <label htmlFor="fname">
        First Name{' '}
        <span>
          * <small>{formData.errors.fname}</small>
        </span>
      </label>
      <input
        type="text"
        name="fname"
        id="fname"
        onChange={handleChange}
        value={formData.fname}
      />
      <label htmlFor="lname">
        Last Name{' '}
        <span>
          * <small>{formData.errors.lname}</small>
        </span>
      </label>
      <input
        type="text"
        name="lname"
        id="lname"
        onChange={handleChange}
        value={formData.lname}
      />
      <label htmlFor="email">
        Email{' '}
        <span>
          * <small>{formData.errors.email}</small>
        </span>
      </label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={handleChange}
        value={formData.email}
      />
      {formData.mcMessage === null ? null : (
        <div
          dangerouslySetInnerHTML={{
            __html: formData.mcMessage,
          }}
        />
      )}
      <button type="submit">Subscribe</button>
    </Form>
  );
};

const emptyValidation = formData => {
  let hasErrors = false;

  if (formData.email.trim() === '') {
    formData.errors.email = 'Required field';
    hasErrors = true;
  } else {
    formData.errors.email = null;
  }

  if (formData.fname.trim() === '') {
    formData.errors.fname = 'Required field';
    hasErrors = true;
  } else {
    formData.errors.fname = null;
  }

  if (formData.lname.trim() === '') {
    formData.errors.lname = 'Required field';
    hasErrors = true;
  } else {
    formData.errors.lname = null;
  }

  return { errors: formData.errors, hasErrors };
};

export { MailChimpSignupForm };
