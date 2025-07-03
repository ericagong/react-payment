import { useEffect } from 'react';

export default function useMaxLength(ref, { maxLength }) {
  useEffect(() => {
    const $target = ref.current;
    if ($target) {
      $target.maxLength = maxLength;
    }
  }, [ref, maxLength]);
}
