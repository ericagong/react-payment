export default function Input({ id, placeholder, value, onChange }) {
  return (
    <input
      id={id}
      type='text'
      className='input-transparent'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
