import SecurityCodeInput from './SecurityCodeInput.jsx';
import { useState } from 'react';

export default {
  title: 'UIs/SecurityCodeInput',
  component: SecurityCodeInput,
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
  const [securityCode, setSecurityCode] = useState('');
  return (
    <SecurityCodeInput
      {...args}
      value={securityCode}
      onChange={(e) => setSecurityCode(e.target.value)}
    />
  );
};
