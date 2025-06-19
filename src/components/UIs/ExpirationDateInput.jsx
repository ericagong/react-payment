import useUncontrolledField from '../hooks/useUncontrolledField.js';
import { isNumber, isValidMonth } from '../utils/utils.js';
import { VStack, Center } from '../layouts/index.jsx';
import Label from '../primitives/Label.jsx';
import UInput from '../primitives/UInput.jsx';

export default function ExpirationDateInput({ name, onChange }) {
  const [displayRef, handleUserInput, handleUserDelete] = useUncontrolledField({
    name,
    typeCheck: isNumber,
    patternCheck: (value) => value.length <= 4,
    validationCheck: (value) => {
      const month = value.slice(0, 2);
      return isValidMonth(month);
    },
    format: (value) => value.replace(/(\d{2})(?=\d)/g, '$1/').trim(),
    onChange,
  });

  return (
    <VStack className='input__container--small'>
      <Label id='expiration-date' title='만료일' />
      <Center className='input__field-box'>
        <UInput
          id='expiration-date'
          name={name}
          placeholder='MM/YY'
          ref={displayRef}
          onBeforeInput={(e) => handleUserInput(e)}
          onInput={(e) => handleUserDelete(e)}
        />
      </Center>
    </VStack>
  );
}
