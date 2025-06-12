import Input from './Input.jsx';
import { useState } from 'react';

export default {
  title: 'Primitives/Input',
  component: Input,
  args: {
    placeholder: 'Enter text here',
  },
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export const Default = (args) => {
  const [value, setValue] = useState('');
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
