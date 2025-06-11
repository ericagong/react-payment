import Input from '../components/Input.jsx';

export default {
    title: 'Atom/Input',
    component: Input,
    args: {
        title: 'label',
        type: 'text',
        placeholder: '',
    }
}

export const basic = (args) => <Input {...args} />;