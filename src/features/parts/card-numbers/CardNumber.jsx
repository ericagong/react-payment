import { forwardRef } from 'react';
import { Input } from '../../../components/primitives';
import useNumberInput from '../hooks/useNumberInput';

const CARD_NUMBER_DIGIT = 4;

const CardNumber = forwardRef(({ nativeType, focusNext, ...props }, ref) => {
  const { handleInput: handleNumberInput } = useNumberInput(ref, {
    digitLength: CARD_NUMBER_DIGIT,
  });

  const onInput = () => {
    handleNumberInput();
    if (focusNext) {
      focusNext();
    }
  };

  return (
    <Input
      ref={ref}
      nativeType={nativeType}
      required
      onInput={onInput}
      {...props}
    />
  );
});

export default CardNumber;
