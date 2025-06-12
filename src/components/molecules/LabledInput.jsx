import '../../styles/input.css';
import Label from '../atoms/Label.jsx';
import Input from '../atoms/Input.jsx';

export default function LabledInput({ title, placeholder, value, onChange }) {
  return (
    <div className='input-container'>
      <Label title={title} />
      <Input
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
