import Text from './Text.jsx';

export default {
  title: 'Primitives/Text',
  component: Text,
  args: {
    content: 'Text Content',
  },
  argTypes: {
    content: { control: 'text' },
  },
};

export const Default = (args) => {
  return <Text {...args} />;
};
