import { useRef } from 'react';

export default function useUncontrolledField({
  name,
  typeCheck,
  patternCheck,
  validationCheck,
  format,
  mask,
  onChange,
}) {
  const rawRef = useRef('');
  const displayRef = useRef('');

  const updateRawValue = (newValue) => {
    rawRef.current = newValue;
  };

  const updateDisplayValue = () => {
    const raw = rawRef.current;
    const formatted = format ? format(raw) : raw;
    const masked = mask ? mask(formatted) : formatted;
    displayRef.current.value = masked;
  };

  const updateFormState = () => {
    onChange?.(name, rawRef.current);
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    const key = e.data;

    if (typeCheck && !typeCheck(key)) return;

    // TODO 반영하되, 에러 메시지로 다르게 처리할 수도 있음(현재는 미기입 처리)
    const newValue = rawRef.current + key;
    if (patternCheck && !patternCheck(newValue)) return;
    if (validationCheck && !validationCheck(newValue)) return;

    updateRawValue(newValue);
    updateDisplayValue();
    updateFormState();
  };

  const handleUserDelete = (e) => {
    // TODO 범위 삭제 구현
    const newValue = rawRef.current.slice(0, -1);
    updateRawValue(newValue);
    updateDisplayValue();
    updateFormState();
  };

  return [displayRef, handleUserInput, handleUserDelete];
}
