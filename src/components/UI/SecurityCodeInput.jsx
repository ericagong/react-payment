import { VStack, HStack, Center } from '../layouts/layout.jsx';
import Label from '../primitives/Label.jsx';
import Input from '../primitives/Input.jsx';
import { BsQuestionCircle } from 'react-icons/bs';

export default function SecurityCodeInput({ value, onChange }) {
  return (
    <VStack className='input-container-small'>
      <Label id='security-code' title='보안 코드(CVC/CVV)' />
      <HStack>
        <Center className='input-box'>
          <Input
            id='security-code'
            placeholder=''
            value={value}
            onChange={onChange}
          />
        </Center>
        <BsQuestionCircle size={30} />
      </HStack>
    </VStack>
  );
}
