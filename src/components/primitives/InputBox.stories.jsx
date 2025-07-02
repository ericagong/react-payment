import { Half } from '../layouts/index.jsx';
import InputBox from './InputBox.jsx';
import Input from './Input.jsx';

export default {
  title: 'Primitives/InputBox',
  component: InputBox,
};

export const CardNumberInputs = () => (
  <InputBox>
    <Input placeholder='카드번호 1' />
    -
    <Input placeholder='카드번호 2' />
    -
    <Input nativeType='password' placeholder='카드번호 3' />
    -
    <Input nativeType='password' placeholder='카드번호 4' />
  </InputBox>
);

export const ExpiryDateInputs = () => (
  <Half>
    <InputBox>
      <Input placeholder='YY' />
      /
      <Input placeholder='MM' />
    </InputBox>
  </Half>
);
