export default function useFocusNextHandler(refs, nextRef) {
  const isLastField = (idx) => idx === refs.length - 1;

  const getNextField = (idx) => {
    return isLastField(idx) ? nextRef?.current : refs[idx + 1]?.current;
  };

  const focusNextField = (idx) => {
    const $nextField = getNextField(idx);
    $nextField?.focus();
  };

  const blurCurrentField = (idx) => {
    const $currentField = refs[idx]?.current;
    $currentField?.blur();
  };

  const createFocusNextHandler = (idx) => () => {
    focusNextField(idx);
    if (!getNextField(idx)) {
      blurCurrentField(idx);
    }
  };

  return { createFocusNextHandler };
}
