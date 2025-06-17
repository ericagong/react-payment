import Input from './Input.jsx';
import { useState } from 'react';

export default {
  title: 'Primitives/Input',
  component: Input,
  args: {
    id: 'id',
    placeholder: 'Enter text here',
  },
  argTypes: {
    placeholder: { control: 'text' },
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
