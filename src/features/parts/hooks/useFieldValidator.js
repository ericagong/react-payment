export default function useFieldValidator(
  ref,
  { pattern, maxLength, validate },
) {
  const isValid = () => {
    const $target = ref.current;
    const value = $target.value;

    if (pattern && !pattern.test(value)) {
      return false;
    }

    if (maxLength && value.length > maxLength) {
      return false;
    }

    if (validate && !validate(value)) {
      return false;
    }

    return true;
  };

  return { isValid };
}
