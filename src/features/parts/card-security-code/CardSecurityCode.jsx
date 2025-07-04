import { useFormContext } from '../../../providers/FormProvider';
import useNumericSanitizer from '../hooks/useNumericSanitizer';
import useFieldCompleted from '../hooks/useFieldCompleted';
import { useEffect } from 'react';
import { InputContainer, Input, Icon } from '../../../components/primitives';
import { Half, HStack } from '../../../components/layouts';
import { BsQuestionCircle } from 'react-icons/bs';

const SECURITY_CODE_DIGIT = 3;

export default function CardSecurityCode({ ref, nextRef }) {
  const { register, unregister } = useFormContext();

  const { sanitize } = useNumericSanitizer(ref);

  const { isCompleted } = useFieldCompleted(ref, {
    requiredLength: SECURITY_CODE_DIGIT,
  });

  const handleInput = () => {
    sanitize();
  };

  const handleChange = () => {
    if (isCompleted()) {
      nextRef?.current?.focus();
    }
  };

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
          <Input
            ref={ref}
            nativeType='password'
            maxLength={SECURITY_CODE_DIGIT}
            onInput={handleInput}
            onChange={handleChange}
          />
          <Icon icon={BsQuestionCircle} isValid={true} onClick={handleClick} />
        </HStack>
      </Half>
    </InputContainer>
  );
}
