import Icon from './Icon.jsx';
import { BsDot, BsQuestionCircle } from 'react-icons/bs';

export default {
  title: 'Primitives/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const InvalidIcon = Template.bind({});
InvalidIcon.args = {
  icon: BsDot,
  isValid: false,
};

export const ValidIcon = Template.bind({});
ValidIcon.args = {
  icon: BsQuestionCircle,
  isValid: true,
};
