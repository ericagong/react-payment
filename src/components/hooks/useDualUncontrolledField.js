import { useRef } from 'react';

export default function useDualUncontrolledField({
  name,
  typeCheck,
  patternCheck,
  onChange,
}) {
  const rawRef = useRef('');
  const displayRefs = [useRef(''), useRef('')];

  const updateRawValue = (newValue) => {
    rawRef.current = newValue;
  };

  const updateDisplayValues = () => {
    const masked = '*'.repeat(rawRef.current.length);
    masked.split('').forEach((ch, i) => {
      if (displayRefs[i].current) {
        displayRefs[i].current.value = ch;
      }
    });
  };

  const updateFormState = () => {
    onChange?.(name, rawRef.current);
  };

  const handleUserInput = (e, index) => {
    e.preventDefault();
    const key = e.data;
    if (typeCheck && !typeCheck(key)) return;

    const chars = rawRef.current.split('');
    chars[index] = key;
    const newValue = chars.join('');

    if (patternCheck && !patternCheck(newValue)) return;

    updateRawValue(newValue);
    updateDisplayValues();
    updateFormState();
  };

  // TODO 범위 삭제 구현 (현재는 단일 삭제 처리)
  const handleUserDelete = (e, index) => {
    const chars = rawRef.current.split('');
    chars[index] = '';
    const newValue = chars.join('');
    updateRawValue(newValue);
    updateDisplayValues();
    updateFormState();
  };

  return [displayRefs, handleUserInput, handleUserDelete];
}
