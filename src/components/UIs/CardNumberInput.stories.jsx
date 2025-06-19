import CardNumberInput from './CardNumberInput.jsx';
import { useState } from 'react';

export default {
  title: 'UIs/CardNumberInput',
  component: CardNumberInput,
  args: {
    id: 'card-number',
    title: '카드 번호',
    placeholder: '',
  },
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export const Default = (args) => {
  const [cardNumber, setCardNumber] = useState('');
  return (
    <CardNumberInput
      {...args}
      value={cardNumber}
      onChange={(e) => setCardNumber(e.target.value)}
    />
  );
};
