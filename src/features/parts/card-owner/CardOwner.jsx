import { useState, useEffect } from 'react';
import { useFormContext } from '../../../providers/useFormContext';
import useMaxLength from '../hooks/useMaxLength';
import { InputContainer, Input } from '../../../components/primitives';
import { HStack, Spacer } from '../../../components/layouts';

const CARD_OWNER_MAX_DIGIT = 30;

export default function CardOwner({ ref, nextRef }) {
  const [ownerLength, setOwnerLength] = useState(0);
  const { register, unregister } = useFormContext();

  useMaxLength(ref, { maxLength: CARD_OWNER_MAX_DIGIT });

  const handleInput = () => {
    const $target = ref.current;

    setOwnerLength($target.value.length);

    if ($target.value.length >= CARD_OWNER_MAX_DIGIT) {
      nextRef?.current?.focus();
    }
  };

  useEffect(() => {
    register('owner', () => ref.current.value);
    return () => {
      unregister('owner');
    };
  }, []);

  return (
    <InputContainer>
      <HStack>
        <span className='input-title'>카드 소유자</span>
        <Spacer />
        <span className='input-counter'>{`${ownerLength} / ${CARD_OWNER_MAX_DIGIT}`}</span>
      </HStack>
      <Input
        ref={ref}
        required={false}
        placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
        onInput={handleInput}
      />
    </InputContainer>
  );
}
