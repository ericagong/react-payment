import Icon from './Icon.jsx';

import { BsDot, BsQuestionCircle } from 'react-icons/bs';

export default {
  title: 'Primitives/Icon',
  component: Icon,
  args: {
    color: 'currentColor',
  },
};

export const Default = (args) => {
  return <Icon {...args} icon={BsDot} />;
};

export const Clickable = (args) => {
  const handleClick = () => {
    alert('Clickable icon clicked!');
  };

  return (
    <Icon {...args} icon={BsQuestionCircle} clickable onClick={handleClick} />
  );
};
