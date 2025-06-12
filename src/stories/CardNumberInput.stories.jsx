import CardNumberInput from '../components/organisms/CardNumberInput.jsx';

export default {
    title: 'Organisms/CardNumberInput',
    component: CardNumberInput,
    args: {
        title: '카드 번호',
        placeholder: '카드 번호를 입력해주세요.',
    }
}

export const Default = (args) => {
    return (
        <CardNumberInput {...args} />
    );
}