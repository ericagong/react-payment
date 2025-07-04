import { forwardRef } from 'react';
import useNumericSanitizer from '../hooks/useNumericSanitizer';
import useFieldCompletion from '../hooks/useFieldCompleted';
import useFieldValidator from '../hooks/useFieldValidator';
import { Input } from '../../../components/primitives';

const MONTH_DIGIT = 2;

const Month = forwardRef(({ focusNext, ...props }, ref) => {
  const { sanitize } = useNumericSanitizer(ref);

  const { isValid } = useFieldValidator(ref, {
    maxLength: MONTH_DIGIT,
    pattern: /^(0[1-9]|1[0-2])$/,
  });

  const { isCompleted } = useFieldCompletion(ref, {
    requiredLength: MONTH_DIGIT,
  });

  const handleInput = () => {
    sanitize();
  };

  const handleChange = () => {
    if (isCompleted()) {
      focusNext?.();
    }
  };

  const handleBlur = () => {
    if (!isValid()) {
      window.alert(
        '유효하지 않은 월입니다. 01부터 12 사이의 값을 입력해주세요.',
      );
    }
  };

  return (
    <Input
      ref={ref}
      required
      placeholder='MM'
      maxLength={MONTH_DIGIT}
      onInput={handleInput}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  );
});

export default Month;
