export default function Input({ id, placeholder, maxLength, value, onChange }) {
  return (
    <input
      id={id}
      type='text'
      className='input__field'
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    />
  );
}
