import { FormProvider, useFormContext } from '../../providers/useFormContext';
import useRefs from './hooks/useRefs';
import { useRef } from 'react';
import { Form, Button } from '../../components/primitives';
import CardNumbers from './card-numbers/CardNumbers';
import CardExpiryDate from './card-expiry-date/CardExpiryDate';
import CardOwner from './card-owner/CardOwner';
import CardSecurityCode from './card-security-code/CardSecurityCode';
import CardPassword from './card-password/CardPassword';

const CARD_NUMBER_FIELD_SIZE = 4;
const CARD_EXPIRY_FIELD_SIZE = 2;
const CARD_PASSWORD_FIELD_SIZE = 2;

export function CardEditForm() {
  const { getFormState } = useFormContext();

  const cardRefs = useRefs(CARD_NUMBER_FIELD_SIZE);
  const expiryRefs = useRefs(CARD_EXPIRY_FIELD_SIZE);
  const ownerRef = useRef(null);
  const securityCodeRef = useRef(null);
  const passwordRefs = useRefs(CARD_PASSWORD_FIELD_SIZE);
  const submitButtonRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formState = getFormState();
    console.log(formState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumbers refs={cardRefs} nextRef={expiryRefs[0]} />
      <CardExpiryDate refs={expiryRefs} nextRef={ownerRef} />
      <CardOwner ref={ownerRef} nextRef={securityCodeRef} />
      <CardSecurityCode ref={securityCodeRef} nextRef={passwordRefs[0]} />
      <CardPassword refs={passwordRefs} />
      <Button type='submit' onClick={handleSubmit}>
        다음
      </Button>
    </Form>
  );
}

export default function FormWithContext() {
  return (
    <FormProvider>
      <CardEditForm />
    </FormProvider>
  );
}
