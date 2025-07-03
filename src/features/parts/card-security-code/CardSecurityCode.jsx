import { useFormContext } from '../../../providers/useFormContext';
import { use, useRef } from 'react';
import useNumberInput from '../hooks/useNumberInput';
import { useEffect } from 'react';
import { InputContainer, Input, Icon } from '../../../components/primitives';
import { Half, HStack } from '../../../components/layouts';
import { BsQuestionCircle } from 'react-icons/bs';

const SECURITY_CODE_DIGIT = 3;
export default function CardSecurityCode() {
  const { register, unregister } = useFormContext();

  const ref = useRef(null);

  const { handleInput: handleNumberInput } = useNumberInput(ref, {
    digitLength: SECURITY_CODE_DIGIT,
  });

  const handleClick = () => {
    window.alert(
      '보안 코드는 카드 뒷면에 있는 3자리 숫자입니다. 카드가 없을 경우, 카드사에 문의해주세요.',
    );
  };

  useEffect(() => {
    register('securityCode', () => ref.current.value);
    return () => {
      unregister('securityCode');
    };
  }, []);

  return (
    <InputContainer title='보안 코드(CVC/CVV)'>
      <Half>
        <HStack>
          <Input ref={ref} nativeType='password' onInput={handleNumberInput} />
          <Icon icon={BsQuestionCircle} isValid={true} onClick={handleClick} />
        </HStack>
      </Half>
    </InputContainer>
  );
}
