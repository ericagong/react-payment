import { forwardRef } from 'react';
import { Input } from '../../../components/primitives';
import useNumericSanitizer from '../hooks/useNumericSanitizer';
import useFieldCompleted from '../hooks/useFieldCompleted';

const CARD_NUMBER_DIGIT = 4;

const CardNumber = forwardRef(
  ({ name, nativeType, focusNext, ...props }, ref) => {
    const { sanitize } = useNumericSanitizer(ref);

    const { isCompleted } = useFieldCompleted(ref, {
      requiredLength: CARD_NUMBER_DIGIT,
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
        nativeType={nativeType}
        required
        maxLength={CARD_NUMBER_DIGIT}
        onInput={handleInput}
        onChange={handleChange}
        {...props}
      />
    );
  },
);

CardNumber.displayName = 'CardNumber';

export default CardNumber;
