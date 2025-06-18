import { VStack, Center } from '../layouts/index.jsx';
import Label from '../primitives/Label.jsx';
import Input from '../primitives/Input.jsx';

export default function ExpirationDateInput({
  value,
  onChange,
  maxLength = 5,
}) {
  return (
    <VStack className='input__container--small'>
      <Label id='expiration-date' title='만료일' />
      <Center className='input__field-box'>
        <Input
          id='expiration-date'
          placeholder='MM/YY'
          maxLength={maxLength}
          value={value}
          onChange={onChange}
        />
      </Center>
    </VStack>
  );
}
