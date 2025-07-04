import { useRef } from 'react';

export default function useRefs(length) {
  const refs = Array.from({ length }, () => useRef(null));
  return refs;
}
