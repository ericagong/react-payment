import useRefs from '../../../features/parts/hooks/useRefs';
import useNumberInput from '../../../features/parts/hooks/useNumberInput';
import { InputContainer, Input, Icon } from '../../../components/primitives';
import { Half, HStack, Min } from '../../../components/layouts';
import { BsDot } from 'react-icons/bs';

const CARD_PASSWORD_FIELD_SIZE = 2;
export default function CardPassword() {
  const [firstPWRef, secondPWRef] = useRefs(CARD_PASSWORD_FIELD_SIZE);

  const { handleInput: handleFirstNumberInput } = useNumberInput(firstPWRef, {
    digitLength: 1,
  });
  const { handleInput: handleSecondNumberInput } = useNumberInput(secondPWRef, {
    digitLength: 1,
  });

  const focusSecondPW = () => {
    const $target = firstPWRef.current;
    if ($target.value.length === $target.maxLength) {
      secondPWRef.current.focus();
    }
  };

  const handleFirstPWInput = () => {
    handleFirstNumberInput();
    focusSecondPW();
  };

  return (
    <InputContainer title='카드 비밀번호'>
      <Half>
        <HStack>
          <Min>
            <Input
              ref={firstPWRef}
              nativeType='password'
              onInput={handleFirstPWInput}
            />
          </Min>
          <Min>
            <Input
              ref={secondPWRef}
              nativeType='password'
              onInput={handleSecondNumberInput}
            />
          </Min>
          <Min>
            <Icon icon={BsDot} isValid={false} />
          </Min>
          <Min>
            <Icon icon={BsDot} isValid={false} />
          </Min>
        </HStack>
      </Half>
    </InputContainer>
  );
}
