import { forwardRef } from 'react';
import { Input } from '../../../components/primitives';
import useNumberInput from '../hooks/useNumberInput';
import { isValidMonth } from '../utils';

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
    if (focusNext) {
      focusNext();
    }
  };

  return <Input placeholder='MM' ref={ref} onInput={onInput} {...props} />;
});

export default Month;
