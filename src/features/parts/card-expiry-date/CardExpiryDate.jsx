import useRefs from '../hooks/useRefs';
import useNumberInput from '../hooks/useNumberInput';
import {
  InputContainer,
  InputBox,
  Input,
} from '../../../components/primitives';
import Month from './Month';
import { Half } from '../../../components/layouts';

const EXPIRY_DATE_FIELD_SIZE = 2;
const YEAR_DIGIT = 2;

// TODO 만료일은 실시간으로 카드 UI에 반영된다.
export default function ExpiryDate() {
  const [monthRef, yearRef] = useRefs(EXPIRY_DATE_FIELD_SIZE);

  const { handleInput: handleNumberInput } = useNumberInput(yearRef, {
    digitLength: YEAR_DIGIT,
  });

  const focusYear = () => {
    const $target = monthRef.current;
    if ($target.value.length === $target.maxLength) {
      yearRef.current.focus();
    }
  };

  return (
    <InputContainer title='만료일'>
      <Half>
        <InputBox>
          <Month ref={monthRef} focusNext={focusYear} />
          /
          <Input placeholder='YY' ref={yearRef} onInput={handleNumberInput} />
        </InputBox>
      </Half>
    </InputContainer>
  );
}
