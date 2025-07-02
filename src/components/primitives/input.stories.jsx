import Input from './Input.jsx';

export default {
  title: 'Primitives/Input',
  copmponent: Input,
  argTypes: {
    nativeType: {
      defaultValue: 'text',
    },
  },
};

const Template = (props) => (
  <div style={{ width: '50%' }}>
    <Input placeholder='입력해주세요.' {...props} />
  </div>
);

export const Default = Template.bind({});
