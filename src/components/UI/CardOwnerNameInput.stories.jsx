import CardOwnerNameInput from './CardOwnerNameInput.jsx';
import { useState } from 'react';

export default {
  title: 'UIs/CardOwnerNameInput',
  component: CardOwnerNameInput,
  args: {
    id: 'card-owner-name',
    title: '카드 소유자 이름',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    maxLength: 30,
  },
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    maxLength: { control: 'number' },
  },
};

export const Default = (args) => {
  const [cardOwnerName, setCardOwnerName] = useState('');
  return (
    <CardOwnerNameInput
      {...args}
      value={cardOwnerName}
      onChange={(e) => setCardOwnerName(e.target.value)}
    />
  );
};
