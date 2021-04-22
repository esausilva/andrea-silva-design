import React, { useReducer, useContext } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';
import { darken } from 'polished';

import { pink } from '~styles/theme';
import { PopupCookieContext } from '~components/layouts/MainLayout';
import { getMaxCookieAgeInSeconds } from '~utils/index';
import { Image } from '~helpers/Image';
import { transformationsFormat } from '~utils/index';

//#region Styles
const danger = '#dc3545';

const Body = styled.div`
  display: flex;
`;

const FormImage = styled.div`
  display: none;
  width: 40%;
  position: relative;
  overflow: hidden;
  margin-right: 0.7rem;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: inline-block;
    img {
      position: absolute;
      margin: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 60%;
  }
`;

const Title = styled.h4`
  align-self: center;
  font-size: 1.9rem;
  text-align: center;
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
  const { createCookie } = useContext(PopupCookieContext);

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
          createCookie(getMaxCookieAgeInSeconds({ isNeverExpires: true }));
        }
      })
      .catch(err => alert(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Subscribe to My Newsletter and Get a Free Download!</Title>
      <Body>
        <FormImage>
          <Image
            alt="Andrea Silva Design Newsletter Free Download"
            title="Andrea Silva Design Newsletter Free Download"
            relativePath="freebies/andrea-silva-design-newsletter-free-download.jpg"
            transformations={transformationsFormat('w_500')}
          />
        </FormImage>
        <FormContent>
          <p>
            Download this free watercolor printable of Forest Bathing as my gift
            to you for subscribing to my newsletter. Newsletter subscribers will
            receive special updates and bonus content not found anywhere else!
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
            type="email"
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
        </FormContent>
      </Body>
    </form>
  );
};

const emptyValidation = formData => {
  let hasErrors = false;

  if (formData.email.trim() === '') {
    formData.errors.email = 'Required';
    hasErrors = true;
  } else {
    formData.errors.email = null;
  }

  if (formData.fname.trim() === '') {
    formData.errors.fname = 'Required';
    hasErrors = true;
  } else {
    formData.errors.fname = null;
  }

  if (formData.lname.trim() === '') {
    formData.errors.lname = 'Required';
    hasErrors = true;
  } else {
    formData.errors.lname = null;
  }

  return { errors: formData.errors, hasErrors };
};

export { MailChimpSignupForm };
