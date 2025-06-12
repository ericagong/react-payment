import { onlyNumber, underSixteen, formatCardNumber } from '../utils/utils.js';
import { useState } from 'react';
import LabledInput from '../molecules/LabledInput.jsx';

export default function CardNumberInput() {
  const [cardNumbers, setcardNumbers] = useState('');

  const onChange = (e) => {
    const input = e.target.value;
    const numbers = onlyNumber(input);
    const sliced = underSixteen(numbers);
    const formatted = formatCardNumber(sliced);
    setcardNumbers(formatted);
  };

  return (
    <LabledInput
      title='카드 번호'
      placeholder=''
      value={cardNumbers}
      onChange={onChange}
    />
  );
}
