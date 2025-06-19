import { useState } from 'react';
import CardNumberInput from '../../components/UIs/CardNumberInput.jsx';
import ExpirationDateInput from '../../components/UIs/ExpirationDateInput.jsx';
import CardOwnerNameInput from '../../components/UIs/CardOwnerNameInput.jsx';
import SecurityCodeInput from '../../components/UIs/SecurityCodeInput.jsx';
import PasswordInput from '../../components/UIs/PasswordInput.jsx';

export default function AddCardForm() {
  const [formState, setFormState] = useState({
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    cardOwnerName: '',
    password: '',
  });

  const handleControlledChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUncontrolledChange = (name, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardNumberInput name='cardNumber' onChange={handleUncontrolledChange} />
      <ExpirationDateInput
        name='expirationDate'
        onChange={handleUncontrolledChange}
      />
      <CardOwnerNameInput
        name='cardOwnerName'
        value={formState.cardOwnerName}
        onChange={handleControlledChange}
      />
      <SecurityCodeInput
        name='securityCode'
        onChange={handleUncontrolledChange}
      />
      <PasswordInput name='password' onChange={handleUncontrolledChange} />
      <button type='submit'>제출</button>
    </form>
  );
}
