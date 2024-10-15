import React, { useReducer, useContext } from 'react';
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
  message: null,
  errors: {
    email: null,
    fname: null,
    lname: null,
  },
};

const formReducer = (state, { name, value, reset }) => {
  if (reset) return { ...initialFormState, message: value };

  return {
    ...state,
    [name]: value,
  };
};

const KitSignupForm = () => {
  const [formData, dispatch] = useReducer(formReducer, initialFormState);
  const { createCookie } = useContext(PopupCookieContext);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ name, value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { errors, hasErrors } = emptyValidation(formData);
    dispatch({ name: 'errors', value: errors });

    if (hasErrors) return;

    const { email, fname, lname } = formData;
    const kitApiUrl = `${process.env.GATSBY_KIT_API_ENDPOINT}/v3/forms/${process.env.GATSBY_KIT_FORM_ID}/subscribe`;

    try {
      var response = await fetch(kitApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          first_name: fname,
          fields: {
            last_name: lname,
          },
          api_key: process.env.GATSBY_KIT_API_KEY,
          tags: [process.env.GATSBY_KIT_FORM_TAG],
        }),
      });
      const data = await response.json();

      if (response.status !== 200) {
        dispatch({
          name: 'message',
          value: getMessageValue(false, `${data.error}: ${data.message}`),
          reset: true,
        });
        return;
      }

      if (data?.subscription?.state === 'active') {
        dispatch({
          name: 'message',
          value: getMessageValue(
            true,
            'Yay! Looks like you are subscribed already.',
          ),
          reset: true,
        });
        return;
      }

      dispatch({
        name: 'message',
        value: getMessageValue(
          true,
          "Yay! Thanks for subscribing. A confirmation email has been sent to your inbox. Please check your spam folder if you can't find it.",
        ),
        reset: true,
      });
      createCookie(getMaxCookieAgeInSeconds({ isNeverExpires: true }));
    } catch (error) {
      dispatch({
        name: 'message',
        value: getMessageValue(false, `${error}`),
        reset: true,
      });
    }
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
            {formData.message === null ? null : (
              <div
                dangerouslySetInnerHTML={{
                  __html: formData.message,
                }}
              />
            )}
            <Button
              name="Subscribe To My Newsletter"
              type="submit"
              $bgColor={pink}
            >
              Download
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

const getMessageValue = (success, value) => {
  let color = '#28a745';

  if (success === false) color = '#dc3545';

  return `<p style="color:${color};">${value}</p>`;
};

export { KitSignupForm };
