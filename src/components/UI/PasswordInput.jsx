import { VStack, HStack, Center } from '../layouts/layout.jsx';
import Label from '../primitives/Label.jsx';
import Input from '../primitives/Input.jsx';
import { BsDot } from 'react-icons/bs';

export default function PasswordInput({ values, onChanges }) {
  return (
    <VStack className='input-container-basic'>
      <Label id='password' title='비밀번호' />
      <HStack>
        <Center className='input-box input-box-single'>
          <Input
            id='password-1'
            placeholder=''
            value={values[0]}
            onChange={(e) => onChanges(0, e.target.value)}
          />
        </Center>
        <Center className='input-box input-box-single'>
          <Input
            id='password-2'
            placeholder=''
            value={values[1]}
            onChange={(e) => onChanges(1, e.target.value)}
          />
        </Center>
        <BsDot size={30} />
        <BsDot size={30} />
      </HStack>
    </VStack>
  );
}
