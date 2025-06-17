import ExpirationDateInput from './ExpirationDateInput.jsx';
import { useState } from 'react';

export default {
  title: 'UIs/ExpirationDateInput',
  component: ExpirationDateInput,
  args: {
    id: 'expiration-date',
    title: '만료일',
    placeholder: 'MM/YY',
  },
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export const Default = (args) => {
  const [expirationDate, setExpirationDate] = useState('');
  return (
    <ExpirationDateInput
      {...args}
      value={expirationDate}
      onChange={(e) => setExpirationDate(e.target.value)}
    />
  );
};
