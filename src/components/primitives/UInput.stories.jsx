import UInput from './UInput.jsx';
import { useRef } from 'react';

export default {
  title: 'Primitives/UInput',
  component: UInput,
  args: {
    id: 'u-input',
    name: 'u-input',
    placeholder: 'Enter text',
    defaultValue: '',
  },
};

export const Default = (args) => {
  const inputRef = useRef('initial value');

  return (
    <UInput
      {...args}
      ref={inputRef}
      onBeforeInput={(e) => {
        console.log('Before input:', e.data);
      }}
    />
  );
};
