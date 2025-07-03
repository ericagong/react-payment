import { useFormContext } from '../../../providers/useFormContext';
import useRefs from '../../../features/parts/hooks/useRefs';
import { useEffect } from 'react';
import { InputContainer, Icon } from '../../../components/primitives';
import Password from './Password';
import { Half, HStack, Min } from '../../../components/layouts';
import { BsDot } from 'react-icons/bs';

const CARD_PASSWORD_FIELD_SIZE = 2;
export default function CardPassword() {
  const { register, unregister } = useFormContext();

  const [firstRef, secondRef] = useRefs(CARD_PASSWORD_FIELD_SIZE);

  const focusSecondPW = () => {
    const $secondPWInput = secondRef.current;
    $secondPWInput.focus();
  };

  useEffect(() => {
    register(
      'password',
      () => {
        return [firstRef.current.value, secondRef.current.value];
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
          <Password ref={firstRef} focusNext={focusSecondPW} />
          <Password ref={secondRef} />
          <Min>
            <Icon icon={BsDot} isValid={false} />
          </Min>
          <Min>
            <Icon icon={BsDot} isValid={false} />
          </Min>
        </HStack>
      </Half>
    </InputContainer>
  );
}
