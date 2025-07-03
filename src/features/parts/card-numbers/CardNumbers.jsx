import { useFormContext } from '../../../providers/useFormContext';
import { useEffect } from 'react';
import useRefs from '../hooks/useRefs';
import { InputContainer, InputBox } from '../../../components/primitives';
import CardNumber from './CardNumber';

const CARD_NUMBER_FIELD_SIZE = 4;

export default function CardNumbers() {
  const { register, unregister } = useFormContext();

  const refs = useRefs(CARD_NUMBER_FIELD_SIZE);

  useEffect(() => {
    register('cardNumbers', () => {
      return refs.map((ref) => ref.current.value);
    });
    return () => {
      unregister('cardNumbers');
    };
  }, []);

  const focusNextHandler = (idx) => () => {
    const $nextTarget = refs[idx + 1].current;
    $nextTarget.focus();
  };

  return (
    <InputContainer title='카드 번호'>
      <InputBox>
        <CardNumber ref={refs[0]} focusNext={focusNextHandler(0)} />
        -
        <CardNumber ref={refs[1]} focusNext={focusNextHandler(1)} />
        -
        <CardNumber
          ref={refs[2]}
          nativeType='password'
          focusNext={focusNextHandler(2)}
        />
        -
        <CardNumber ref={refs[3]} nativeType='password' />
      </InputBox>
    </InputContainer>
  );
}
