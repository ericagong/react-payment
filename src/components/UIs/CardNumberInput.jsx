import useUncontrolledField from '../hooks/useUncontrolledField.js';
import { isNumber, convertToAsterisk } from '../utils/utils.js';
import { VStack, Center } from '../layouts/index.jsx';
import Label from '../primitives/Label.jsx';
import UInput from '../primitives/UInput.jsx';

export default function CardNumberInput({ name, onChange }) {
  const [displayRef, handleUserInput, handleUserDelete] = useUncontrolledField({
    name,
    typeCheck: isNumber,
    patternCheck: (value) => value.length <= 16,
    format: (value) => value.replace(/(\d{4})(?=\d)/g, '$1-').trim(),
    mask: (value) =>
      value.length > 15
        ? value.replace(/(\d+)$/, (_, targets) => convertToAsterisk(targets))
        : value,
    onChange,
  });

  return (
    <VStack className='input__container--medium'>
      <Label id='card-number' title='카드 번호' />
      <Center className='input__field-box'>
        <UInput
          id='card-number'
          name={name}
          ref={displayRef}
          placeholder=''
          onBeforeInput={(e) => handleUserInput(e)}
          onInput={(e) => handleUserDelete(e)}
        />
      </Center>
    </VStack>
  );
}
