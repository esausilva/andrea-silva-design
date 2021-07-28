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
const HiddenInputs = styled.input`
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
        inventore cupiditate praesentium obcaecati sit fuga architecto impedit
        quod et ipsa enim fugiat, reprehenderit maxime magni sunt, dolorum
        aliquam? Nobis, facilis.
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

          <HiddenInputs
            type="text"
            id="artwork"
            name="artwork"
            defaultValue={`${artWork} - ${price}`}
            readonly
          ></HiddenInputs>
          <HiddenInputs
            type="text"
            id="artworkLink"
            name="artworkLink"
            defaultValue={url}
            readonly
          ></HiddenInputs>
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
