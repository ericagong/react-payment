export const onlyNumber = (value) => {
  return value.replace(/\D/g, '');
};

export const underSixteen = (value) => {
  return value.slice(0, 16);
};

export const formatCardNumber = (value) => {
  const visible = value.slice(0, 8);
  const masked = '*'.repeat(Math.max(0, value.length - 8));
  const merged = visible + masked;
  return merged.match(/.{1,4}/g)?.join('-') ?? '';
};
