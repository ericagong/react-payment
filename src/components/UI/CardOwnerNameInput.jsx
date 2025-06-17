import { VStack, HStack, Spacer, Center } from '../layouts/layout.jsx';
import Label from '../primitives/Label.jsx';
import Text from '../primitives/Text.jsx';
import Input from '../primitives/Input.jsx';

export default function CardOwnerNameInput({
  value,
  onChange,
  maxLength = 30,
}) {
  return (
    <VStack className='input-container-basic'>
      <HStack>
        <Label id='card-owner-name' title='카드 소유자 이름 (선택)' />
        <Spacer />
        <Text
          className='text-small'
          content={`${value.length} / ${maxLength}`}
        />
      </HStack>
      <Center className='input-box'>
        <Input
          id='card-owner-name'
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          value={value}
          onChange={onChange}
        />
      </Center>
    </VStack>
  );
}
