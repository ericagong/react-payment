import { useFormContext } from '../../../providers/useFormContext';
import useFocusNext from '../hooks/useFocusNext';
import { useEffect } from 'react';
import { InputContainer, Icon } from '../../../components/primitives';
import Password from './Password';
import { Half, HStack } from '../../../components/layouts';
import { BsDot } from 'react-icons/bs';

export default function CardPassword({ refs, nextRef }) {
  const { register, unregister } = useFormContext();

  const { createFocusNextHandler } = useFocusNext(refs, nextRef);

  useEffect(() => {
    register(
      'password',
      () => {
        return [refs[0].current.value, refs[1].current.value];
      },
      () => {
        unregister('password');
      },
    );
  }, []);

  return (
    <InputContainer title='카드 비밀번호'>
      <Half>
        <HStack>
          <Password ref={refs[0]} focusNext={createFocusNextHandler(0)} />
          <Password ref={refs[1]} focusNext={createFocusNextHandler(1)} />
          <Icon icon={BsDot} isValid={false} />
          <Icon icon={BsDot} isValid={false} />
        </HStack>
      </Half>
    </InputContainer>
  );
}
