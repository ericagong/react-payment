import { parseNumber } from '../utils';
import { useEffect } from 'react';

export default function useNumberInput(ref, { digitLength }) {
  const handleInput = () => {
    const $target = ref.current;
    const parsed = parseNumber($target?.value);
    $target.value = parsed;
  };

  useEffect(() => {
    const $target = ref.current;
    $target.maxLength = digitLength;
    $target.minLength = digitLength;
  }, [ref, digitLength]);

  return {
    handleInput,
  };
}
