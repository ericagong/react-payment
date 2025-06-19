import { useRef } from 'react';
import useUncontrolledField from '../hooks/useUncontrolledField.js';
import { isNumber, convertToAsterisk } from '../utils/utils.js';
import { VStack, HStack, Center } from '../layouts/index.jsx';
import Label from '../primitives/Label.jsx';
import UInput from '../primitives/UInput.jsx';
import Icon from '../primitives/Icon.jsx';
import { BsQuestionCircle } from 'react-icons/bs';

export default function SecurityCodeInput({ name, onChange }) {
  const [displayRef, handleUserInput, handleUserDelete] = useUncontrolledField({
    name,
    typeCheck: isNumber,
    patternCheck: (value) => value.length <= 3,
    mask: convertToAsterisk,
    onChange,
  });

  const handleSecurityCodeIconClick = () => {
    window.alert('보안 코드(CVC/CVV)는 카드 뒷면에 있는 3자리 숫자입니다.');
  };

  return (
    <VStack className='input__container--small'>
      <Label id='security-code' title='보안 코드(CVC/CVV)' />
      <HStack>
        <Center className='input__field-box'>
          <UInput
            id='security-code'
            name={name}
            ref={displayRef}
            placeholder=''
            onBeforeInput={(e) => handleUserInput(e)}
            onInput={(e) => handleUserDelete(e)}
          />
        </Center>
        <Icon
          icon={BsQuestionCircle}
          clickable={true}
          onClick={handleSecurityCodeIconClick}
        />
      </HStack>
    </VStack>
  );
}
