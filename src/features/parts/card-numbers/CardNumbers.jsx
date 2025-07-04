import { useFormContext } from '../../../providers/useFormContext';
import { useEffect } from 'react';
import useFocusNextHandler from '../hooks/useFocusNextHandler';
import { InputContainer, InputBox } from '../../../components/primitives';
import CardNumber from './CardNumber';

export default function CardNumbers({ refs, nextRef }) {
  const { register, unregister } = useFormContext();
  const { createFocusNextHandler } = useFocusNextHandler(refs, nextRef);

  useEffect(() => {
    register('cardNumbers', () => {
      return refs.map((ref) => ref.current.value);
    });
    return () => {
      unregister('cardNumbers');
    };
  }, []);

  return (
    <InputContainer title='카드 번호'>
      <InputBox>
        <CardNumber ref={refs[0]} focusNext={createFocusNextHandler(0)} />
        -
        <CardNumber ref={refs[1]} focusNext={createFocusNextHandler(1)} />
        -
        <CardNumber
          ref={refs[2]}
          nativeType='password'
          focusNext={createFocusNextHandler(2)}
        />
        -
        <CardNumber
          ref={refs[3]}
          nativeType='password'
          focusNext={createFocusNextHandler(3)}
        />
      </InputBox>
    </InputContainer>
  );
}
