import { VStack, Center } from '../layouts/layout.jsx';
import Label from '../primitives/Label.jsx';
import Input from '../primitives/Input.jsx';

export default function CardNumberInput({ value, onChange }) {
  return (
    <VStack className='input-container-basic'>
      <Label id='card-number' title='카드 번호' />
      <Center className='input-box'>
        <Input
          id='card-number'
          placeholder=''
          value={value}
          onChange={onChange}
        />
      </Center>
    </VStack>
  );
}
