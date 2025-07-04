export default function useFieldCompleted(ref, { requiredLength }) {
  const isCompleted = () => {
    const $target = ref.current;
    const value = $target.value;

    return value.length === requiredLength;
  };

  return { isCompleted };
}
