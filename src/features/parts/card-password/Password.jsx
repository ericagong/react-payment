import useNumberInput from '../../../features/parts/hooks/useNumberInput';
import { Min } from '../../../components/layouts';
import { Input } from '../../../components/primitives';

const PASSWORD_DIGIT = 1;
export default function Password({ ref, focusNext }) {
  const { handleInput: handleNumberInput } = useNumberInput(ref, {
    digitLength: PASSWORD_DIGIT,
  });

  const handleInput = () => {
    handleNumberInput();
    if (!focusNext) return;
    if (ref.current.value.length === PASSWORD_DIGIT) focusNext();
  };

  return (
    <Min>
      <Input ref={ref} nativeType='password' onInput={handleInput} />
    </Min>
  );
}
