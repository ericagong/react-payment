import { Form, Button } from '../../components/primitives';
import CardNumbers from './card-numbers/CardNumbers';
import CardExpiryDate from './card-expiry-date/CardExpiryDate';
import CardOwner from './card-owner/CardOwner';
import CardSecurityCode from './card-security-code/CardSecurityCode';
import CardPassword from './card-password/CardPassword';

export default function CardEditForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardNumbers />
      <CardExpiryDate />
      <CardOwner />
      <CardSecurityCode />
      <CardPassword />
      <Button type='submit'>다음</Button>
    </Form>
  );
}
