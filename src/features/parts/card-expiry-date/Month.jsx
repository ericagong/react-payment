import { forwardRef } from 'react';
import useNumberInput from '../hooks/useNumberInput';
import { isValidMonth } from '../utils';
import { Input } from '../../../components/primitives';

const MONTH_DIGIT = 2;

const Month = forwardRef(({ nativeType, focusNext, ...props }, ref) => {
  const { handleInput } = useNumberInput(ref, {
    digitLength: MONTH_DIGIT,
  });

  const onInput = () => {
    handleInput();
    if (!isValidMonth(ref.current.value)) {
      return window.alert(
        '유효하지 않은 월입니다. 01부터 12 사이의 값을 입력해주세요.',
      );
    }
    if (ref.current.value.length === MONTH_DIGIT) {
      focusNext();
    }
  };

  return <Input placeholder='MM' ref={ref} onInput={onInput} {...props} />;
});

export default Month;
