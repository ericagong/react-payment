import PasswordInput from './PasswordInput.jsx';
import { useState } from 'react';

export default {
  title: 'UIs/PasswordInput',
  component: PasswordInput,
};

export const Default = (args) => {
  const [passwords, setPasswords] = useState(['', '']);
  const handleChange = (index, value) => {
    const newPasswords = [...passwords];
    newPasswords[index] = value;
    setPasswords(newPasswords);
  };

  return (
    <PasswordInput {...args} values={passwords} onChanges={handleChange} />
  );
};
