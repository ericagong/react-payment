import '../../styles/input.css';

export default function Label({ title }) {
  return (
    <label className='input-title' htmlFor={title}>
      {title}
    </label>
  );
}
