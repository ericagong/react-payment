import { VStack, Center } from '../layouts/layout.jsx';
import Label from '../primitives/Label.jsx';
import Input from '../primitives/Input.jsx';

export default function ExpirationDateInput({ value, onChange }) {
  return (
    <VStack className='input-container-small'>
      <Label id='expiration-date' title='만료일' />
      <Center className='input-box'>
        <Input
          id='expiration-date'
          placeholder='MM/YY'
          value={value}
          onChange={onChange}
        />
      </Center>
    </VStack>
  );
}
