import { useFormContext } from '../../../providers/useFormContext';
import useRefs from '../hooks/useRefs';
import { useEffect } from 'react';
import { InputContainer, InputBox } from '../../../components/primitives';
import Month from './Month';
import Year from './Year';
import { Half } from '../../../components/layouts';

const EXPIRY_DATE_FIELD_SIZE = 2;

// TODO 만료일은 실시간으로 카드 UI에 반영된다.
export default function ExpiryDate() {
  const { register, unregister } = useFormContext();

  const [monthRef, yearRef] = useRefs(EXPIRY_DATE_FIELD_SIZE);

  const focusYear = () => {
    const $yearInput = yearRef.current;
    $yearInput.focus();
  };

  useEffect(() => {
    register('expiryDate', () => {
      const mm = monthRef.current.value;
      const yy = yearRef.current.value;
      return { month: mm, year: yy };
    });
    return () => {
      unregister('expiryDate');
    };
  }, []);

  return (
    <InputContainer title='만료일'>
      <Half>
        <InputBox>
          <Month ref={monthRef} focusNext={focusYear} />
          /
          <Year ref={yearRef} />
        </InputBox>
      </Half>
    </InputContainer>
  );
}
