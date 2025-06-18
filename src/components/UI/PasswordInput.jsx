import { VStack, HStack, Center } from '../layouts/index.jsx';
import Label from '../primitives/Label.jsx';
import Input from '../primitives/Input.jsx';
import Icon from '../primitives/Icon.jsx';
import { BsDot } from 'react-icons/bs';

export default function PasswordInput({ values, onChanges, maxLength = 1 }) {
  return (
    <VStack className='input__container--medium'>
      <Label id='password' title='비밀번호' />
      <HStack>
        <Center className='input__field-box input__field-box--single'>
          <Input
            id='password1'
            placeholder=''
            value={values[0]}
            onChange={(e) => onChanges(0, e.target.value)}
          />
        </Center>
        <Center className='input__field-box input__field-box--single'>
          <Input
            id='password2'
            placeholder=''
            value={values[1]}
            onChange={(e) => onChanges(1, e.target.value)}
          />
        </Center>
        <Icon icon={BsDot} className='input__password-icon' />
        <Icon icon={BsDot} className='input__password-icon' />
      </HStack>
    </VStack>
  );
}
