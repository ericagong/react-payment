import Label from './Label.jsx';

export default {
  title: 'Primitives/Label',
  component: Label,
  args: {
    id: 'id',
    title: 'input title',
  },
  argTypes: {
    title: { control: 'text' },
  },
};

export const Default = (args) => {
  return <Label {...args} />;
};
