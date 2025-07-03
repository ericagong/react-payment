import { forwardRef } from 'react';
import { Input } from '../../../components/primitives';
import useNumberInput from '../hooks/useNumberInput';

const YEAR_DIGIT = 2;
const Year = forwardRef(({}, ref) => {
  const { handleInput } = useNumberInput(ref, {
    digitLength: YEAR_DIGIT,
  });

  return <Input ref={ref} placeholder='YY' onInput={handleInput} />;
});

Year.displayName = 'Year';

export default Year;
