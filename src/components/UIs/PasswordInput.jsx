import useDualUncontrolledField from '../hooks/useDualUncontrolledField.js';
import { isNumber, convertToAsterisk } from '../utils/utils.js';
import { VStack, HStack, Center } from '../layouts/index.jsx';
import Label from '../primitives/Label.jsx';
import UInput from '../primitives/UInput.jsx';
import Icon from '../primitives/Icon.jsx';
import { BsDot } from 'react-icons/bs';

export default function PasswordInput({ name, onChange }) {
  const [displayRefs, handleUserInput, handleUserDelete] =
    useDualUncontrolledField({
      name,
      typeCheck: isNumber,
      patternCheck: (value) => value.length <= 2,
      mask: (value) => convertToAsterisk(value),
      onChange,
    });

  return (
    <VStack className='input__container--medium'>
      <Label id='password' title='비밀번호' />
      <HStack>
        <Center className='input__field-box input__field-box--single'>
          <UInput
            id='password-0'
            name={name}
            placeholder=''
            ref={displayRefs[0]}
            onBeforeInput={(e) => handleUserInput(e, 0)}
            onInput={(e) => handleUserDelete(e, 0)}
          />
        </Center>
        <Center className='input__field-box input__field-box--single'>
          <UInput
            id='password-1'
            name={name}
            placeholder=''
            ref={displayRefs[1]}
            onBeforeInput={(e) => handleUserInput(e, 1)}
            onInput={(e) => handleUserDelete(e, 1)}
          />
        </Center>
        <Icon icon={BsDot} className='input__password-icon' />
        <Icon icon={BsDot} className='input__password-icon' />
      </HStack>
    </VStack>
  );
}
