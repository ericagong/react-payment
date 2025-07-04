import useNumericSanitizer from '../hooks/useNumericSanitizer';
import useFieldCompleted from '../hooks/useFieldCompleted';
import { Min } from '../../../components/layouts';
import { Input } from '../../../components/primitives';

const PASSWORD_DIGIT = 1;
export default function Password({ ref, focusNext }) {
  const { sanitize } = useNumericSanitizer(ref);
  const { isCompleted } = useFieldCompleted(ref, {
    requiredLength: PASSWORD_DIGIT,
  });

  const handleInput = () => {
    sanitize();
  };

  const handleChange = () => {
    if (isCompleted()) {
      focusNext?.();
    }
  };

  return (
    <Min>
      <Input
        ref={ref}
        nativeType='password'
        maxLength={PASSWORD_DIGIT}
        onInput={handleInput}
        onChange={handleChange}
      />
    </Min>
  );
}
