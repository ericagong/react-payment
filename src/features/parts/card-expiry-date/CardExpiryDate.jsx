import { useFormContext } from '../../../providers/FormProvider';
import useFocusNextHandler from '../hooks/useFocusNextHandler';
import { useEffect } from 'react';
import { InputContainer, InputBox } from '../../../components/primitives';
import Month from './Month';
import Year from './Year';
import { Half } from '../../../components/layouts';

export default function ExpiryDate({ refs, nextRef }) {
  const [monthRef, yearRef] = refs;

  const { register, unregister } = useFormContext();

  const { createFocusNextHandler } = useFocusNextHandler(refs, nextRef);

  useEffect(() => {
    register('expiryDate', () => {
      const mm = monthRef?.current?.value ?? '';
      const yy = yearRef?.current?.value ?? '';
      return { month: mm, year: yy };
    });

    return () => unregister('expiryDate');
  }, []);

  return (
    <InputContainer title='만료일'>
      <Half>
        <InputBox>
          <Month ref={monthRef} focusNext={createFocusNextHandler(0)} />
          /
          <Year ref={yearRef} focusNext={createFocusNextHandler(1)} />
        </InputBox>
      </Half>
    </InputContainer>
  );
}
