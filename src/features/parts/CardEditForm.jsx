import { FormProvider, useFormContext } from '../../providers/useFormContext';
import { Form, Button } from '../../components/primitives';
import CardNumbers from './card-numbers/CardNumbers';
import CardExpiryDate from './card-expiry-date/CardExpiryDate';
import CardOwner from './card-owner/CardOwner';
import CardSecurityCode from './card-security-code/CardSecurityCode';
import CardPassword from './card-password/CardPassword';

export function CardEditForm() {
  const { getFormState } = useFormContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formState = getFormState();
    console.log(formState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumbers />
      <CardExpiryDate />
      <CardOwner />
      <CardSecurityCode />
      <CardPassword />
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
