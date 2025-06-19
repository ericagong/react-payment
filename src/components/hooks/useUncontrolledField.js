import { useRef } from 'react';

export default function useUncontrolledField({
  name,
  validate,
  maxLength,
  mask,
  onChange,
}) {
  const rawRef = useRef('');

  const handleUserInput = (e, displayRef) => {
    e.preventDefault();

    const key = e.data;

    if (!validate(key)) return;
    if (rawRef.current.length >= maxLength) return;

    rawRef.current += key;
    const masked = mask(rawRef.current);

    if (displayRef.current) {
      displayRef.current.value = masked;
    }

    onChange?.(name, rawRef.current);
  };

  const handleUserDelete = (e, displayRef) => {
    const maskedLength = displayRef.current?.value.length ?? 0;

    rawRef.current = rawRef.current.slice(0, maskedLength);

    onChange?.(name, rawRef.current);
  };

  return [handleUserInput, handleUserDelete];
}
