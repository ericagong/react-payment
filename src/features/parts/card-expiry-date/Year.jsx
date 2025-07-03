import { forwardRef } from 'react';
import { Input } from '../../../components/primitives';
import useNumberInput from '../hooks/useNumberInput';

const YEAR_DIGIT = 2;
const Year = forwardRef(({ focusNext, ...props }, ref) => {
  const { handleInput } = useNumberInput(ref, {
    digitLength: YEAR_DIGIT,
  });

  const onInput = () => {
    handleInput();
    if (ref.current.value.length === YEAR_DIGIT) {
      focusNext();
    }
  };

  return <Input ref={ref} placeholder='YY' onInput={onInput} {...props} />;
});

Year.displayName = 'Year';

export default Year;
