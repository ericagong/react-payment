export default function Label({ id, title, children }) {
  return (
    <label className='input-title' htmlFor={id}>
      {title}
    </label>
  );
}
