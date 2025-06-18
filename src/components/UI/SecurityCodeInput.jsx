import { VStack, HStack, Center } from '../layouts/index.jsx';
import Label from '../primitives/Label.jsx';
import Input from '../primitives/Input.jsx';
import Icon from '../primitives/Icon.jsx';
import { BsQuestionCircle } from 'react-icons/bs';

export default function SecurityCodeInput({
  value,
  onChange,
  maxLength = 3,
  onClick,
}) {
  return (
    <VStack className='input__container--small'>
      <Label id='security-code' title='보안 코드(CVC/CVV)' />
      <HStack>
        <Center className='input__field-box'>
          <Input
            id='security-code'
            placeholder=''
            maxLength={maxLength}
            value={value}
            onChange={onChange}
          />
        </Center>
        <Icon icon={BsQuestionCircle} clickable={true} onClick={onClick} />
      </HStack>
    </VStack>
  );
}
