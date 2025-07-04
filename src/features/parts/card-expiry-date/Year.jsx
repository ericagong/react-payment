import { forwardRef } from 'react';
import { Input } from '../../../components/primitives';
import useNumericSanitizer from '../hooks/useNumericSanitizer';
import useFieldCompleted from '../hooks/useFieldCompleted';

const YEAR_DIGIT = 2;

const Year = forwardRef(({ focusNext, ...props }, ref) => {
  const { sanitize } = useNumericSanitizer(ref);
  const { isCompleted } = useFieldCompleted(ref, {
    requiredLength: YEAR_DIGIT,
  });

  const handleInput = () => {
    sanitize();
  };

  const handleChange = () => {
    if (isCompleted()) {
      focusNext?.();
    }
  };

  return (
    <Input
      ref={ref}
      placeholder='YY'
      maxLength={YEAR_DIGIT}
      onInput={handleInput}
      onChange={handleChange}
      {...props}
    />
  );
});

Year.displayName = 'Year';

export default Year;
