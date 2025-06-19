export default function Input({
  id,
  name,
  placeholder,
  maxLength,
  value,
  onChange,
}) {
  return (
    <input
      id={id}
      name={name}
      type='text'
      className='input__field'
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    />
  );
}
