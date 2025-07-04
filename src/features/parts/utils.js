export const parseNumber = (value) => {
  return value.replace(/\D/g, '');
};

const JANUARY = 1;
const DECEMBER = 12;
export const isValidMonth = (value) => {
  const parsed = parseNumber(value);

  if (parsed.length === 0) return true;

  const MM = Number(parsed);
  return Number.isInteger(MM) && MM >= JANUARY && MM <= DECEMBER;
};
