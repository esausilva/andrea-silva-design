import React, { useReducer, useContext } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';

import { pink } from '~styles/theme';
import { Button } from '~styles/Button';
import { Title } from '~styles/Modal';
import { Input, Label, Fieldset, ErrorValidation } from '~styles/Form';
import { PopupCookieContext } from '~components/layouts/MainLayout';
import { getMaxCookieAgeInSeconds } from '~utils/index';
import { transformationsFormat } from '~utils/index';
import { Image } from '~helpers/Image';

//#region Styles
const Body = styled.div`
  display: flex;
`;

const PrintableImage = styled.div`
  display: none;
  position: relative;
  overflow: hidden;
  margin-right: 0.7rem;
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    display: inline-block;
    width: 40%;
    img {
      position: absolute;
      margin: 0 !important;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Form = styled.form`
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 60%;
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
          const value = `<p style="color:#dc3545;">${msg}</p>`;
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
    <>
      <Title>Subscribe to My Newsletter and Get a Free Download!</Title>
      <Body>
        <PrintableImage>
          <Image
            alt="Andrea Silva Design Newsletter Free Download"
            title="Andrea Silva Design Newsletter Free Download"
            relativePath="freebies/andrea-silva-design-newsletter-free-download.jpg"
            transformations={transformationsFormat('w_500')}
          />
        </PrintableImage>
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <p>
              Download a free watercolor printable of <em>Forest Bathing</em> as
              my gift to you for subscribing to my newsletter. Newsletter
              subscribers will receive special updates and bonus content not
              found anywhere else!
            </p>
            <Label htmlFor="fname">
              First Name
              <ErrorValidation>* {formData.errors.fname}</ErrorValidation>
            </Label>
            <Input
              type="text"
              name="fname"
              id="fname"
              onChange={handleChange}
              value={formData.fname}
            />
            <Label htmlFor="lname">
              Last Name
              <ErrorValidation>* {formData.errors.lname}</ErrorValidation>
            </Label>
            <Input
              type="text"
              name="lname"
              id="lname"
              onChange={handleChange}
              value={formData.lname}
            />
            <Label htmlFor="signup-email">
              Email
              <ErrorValidation>* {formData.errors.email}</ErrorValidation>
            </Label>
            <Input
              type="email"
              name="email"
              id="signup-email"
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
            <Button type="submit" $bgColor={pink}>
              Subscribe
            </Button>
          </Fieldset>
        </Form>
      </Body>
    </>
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
