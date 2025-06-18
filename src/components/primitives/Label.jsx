export default function Label({ id, title, children }) {
  return (
    <label className='input__label' htmlFor={id}>
      {title}
    </label>
  );
}
