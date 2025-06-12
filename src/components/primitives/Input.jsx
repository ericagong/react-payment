export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      type='text'
      className='input-basic'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
