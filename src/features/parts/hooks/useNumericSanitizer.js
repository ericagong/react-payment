import { parseNumber } from '../utils';

export default function useNumberInput(ref) {
  const sanitize = (value) => {
    const $target = ref.current;
    const sanitized = parseNumber($target?.value);
    $target.value = sanitized;
  };

  return {
    sanitize,
  };
}
