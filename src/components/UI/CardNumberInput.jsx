import { VStack, Center } from '../layouts/index.jsx';
import Label from '../primitives/Label.jsx';
import Input from '../primitives/Input.jsx';

// 16 digits + 3 spaces
export default function CardNumberInput({ value, onChange, maxLength = 19 }) {
  return (
    <VStack className='input__container--medium'>
      <Label id='card-number' title='카드 번호' />
      <Center className='input__field-box'>
        <Input
          id='card-number'
          placeholder=''
          maxLength={maxLength}
          value={value}
          onChange={onChange}
        />
      </Center>
    </VStack>
  );
}
