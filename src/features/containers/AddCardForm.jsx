import { useState } from 'react';
import CardOwnerNameInput from '../../components/UIs/CardOwnerNameInput.jsx';
import SecurityCodeInput from '../../components/UIs/SecurityCodeInput.jsx';

export default function AddCardForm() {
  const [formState, setFormState] = useState({
    securityCode: '',
    cardOwnerName: '',
  });

  const handleControlledChange = (e) => {
    const { name, value } = e.target;
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
      <CardOwnerNameInput
        name='cardOwnerName'
        value={formState.cardOwnerName}
        onChange={handleControlledChange}
      />
      <SecurityCodeInput
        name='securityCode'
        onChange={handleUncontrolledChange}
      />
      <button type='submit'>제출</button>
    </form>
  );
}
