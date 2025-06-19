export const isNumber = (value) => /^\d+$/.test(value);

export const convertToAsterisk = (value) => '*'.repeat(value.length);

export const isValidMonth = (mm) => {
  const [first, second] = mm;
  if (!second) return first === '0' || first === '1';
  if (first === '0') return '123456789'.includes(second);
  if (first === '1') return '012'.includes(second);
};
