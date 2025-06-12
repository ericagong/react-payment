import '../../styles/input.css';

export default function Input({ title, placeholder, value, onChange }) {
  return (
    <div className='input-box'>
      <input
        className='input-basic'
        id={title}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
