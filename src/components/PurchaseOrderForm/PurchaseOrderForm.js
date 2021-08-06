import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';

import { FountainLoading } from '~svgs/FountainLoading';
import {
  Input,
  Label,
  Fieldset,
  ErrorValidation,
  Checkbox,
  ThankYou,
} from '~styles/Form';
import { Button } from '~styles/Button';
import { Title } from '~styles/Modal';

//#region Styles
const HiddenInput = styled.input`
  display: none;
`;
//#endregion

const PurchaseOrderForm = ({ artWork, price }) => {
  const [formState, handleSubmit] = useForm('purchase-order', {
    data: {
      _subject: `Website - Purchase Request - ${artWork}`,
    },
  });
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
    return () => {};
  }, [url]);

  return (
    <>
      <Title>{artWork}</Title>
      <p>
        Once you fill out this form I will be in touch with you about payment
        and shipping details.
      </p>
      <form method="POST" onSubmit={handleSubmit}>
        <Fieldset disabled={formState.submitting}>
          <ThankYou show={formState.succeeded}>
            Thank you for your interest, I will be in touch with you soon.
            -Andrea
          </ThankYou>

          <Label htmlFor="customerName">
            Full Name
            <ErrorValidation>
              *
              <ValidationError
                prefix="Name"
                field="customerName"
                errors={formState.errors}
              />
            </ErrorValidation>
          </Label>
          <Input type="text" id="customerName" name="customerName" />

          <Label htmlFor="customerEmail">
            Email
            <ErrorValidation>
              *
              <ValidationError
                prefix="Email"
                field="customerEmail"
                errors={formState.errors}
              />
            </ErrorValidation>
          </Label>
          <Input type="text" id="customerEmail" name="customerEmail" />

          <Label htmlFor="customerAddress">
            Full Address
            <ErrorValidation>
              *
              <ValidationError
                prefix="Address"
                field="customerAddress"
                errors={formState.errors}
              />
            </ErrorValidation>
          </Label>
          <Input type="text" id="customerAddress" name="customerAddress" />

          <Label htmlFor="newsletterSignUp">
            <Checkbox
              type="checkbox"
              id="newsletterSignUp"
              name="newsletterSignUp"
              value="Yes"
            />
            Subscribe to Newsletter
          </Label>

          <HiddenInput
            type="text"
            id="artwork"
            name="artwork"
            defaultValue={`${artWork} - ${price}`}
            readonly
          ></HiddenInput>
          <HiddenInput
            type="text"
            id="artworkLink"
            name="artworkLink"
            defaultValue={url}
            readonly
          ></HiddenInput>
          <Button type="submit">
            {formState.submitting ? <FountainLoading /> : `Purchase ${price}`}
          </Button>
        </Fieldset>
      </form>
    </>
  );
};

PurchaseOrderForm.propTypes = {
  artWork: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export { PurchaseOrderForm };
