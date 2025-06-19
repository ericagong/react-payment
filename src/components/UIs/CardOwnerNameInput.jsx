import { VStack, HStack, Spacer, Center } from '../layouts/index.jsx';
import Label from '../primitives/Label.jsx';
import Text from '../primitives/Text.jsx';
import Input from '../primitives/Input.jsx';

export default function CardOwnerNameInput({ name, value, onChange }) {
  const MAX_LENGTH = 30;

  return (
    <VStack className='input__container--medium'>
      <HStack>
        <Label id='card-owner-name' title='카드 소유자 이름 (선택)' />
        <Spacer />
        <Text
          className='text--small'
          content={`${value.length} / ${MAX_LENGTH}`}
        />
      </HStack>
      <Center className='input__field-box'>
        <Input
          id='card-owner-name'
          name={name}
          maxLength={MAX_LENGTH}
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          value={value}
          onChange={onChange}
        />
      </Center>
    </VStack>
  );
}
