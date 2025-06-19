export default function UInput({
  id,
  name,
  placeholder,
  ref,
  defaultValue,
  onBeforeInput,
  onInput,
}) {
  return (
    <input
      type='text'
      className='input__field'
      id={id}
      name={name}
      ref={ref}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onBeforeInput={onBeforeInput}
      onInput={onInput}
    />
  );
}
