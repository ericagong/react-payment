import Label from './Label.jsx';

export default {
  title: 'Primitives/Label',
  component: Label,
  args: {
    title: 'title',
  },
  argTypes: {
    title: { control: 'text' },
  },
};

export const Default = (args) => {
  return <Label {...args} />;
};
