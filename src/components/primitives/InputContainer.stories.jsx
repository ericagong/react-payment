import InputContainer from './InputContainer.jsx';
import { Half } from '../layouts/index.jsx';
import InputBox from './InputBox.jsx';
import Input from './Input.jsx';

export default {
  title: 'Primitives/InputContainer',
  component: InputContainer,
};

const Template = (props) => (
  <>
    <InputContainer {...props}>
      <InputBox>
        <Input type='basic' placeholder='카드번호 1' /> -
        <Input type='basic' placeholder='카드번호 2' /> -
        <Input type='basic' nativeType='password' placeholder='카드번호 3' /> -
        <Input type='basic' nativeType='password' placeholder='카드번호 4' />
      </InputBox>
    </InputContainer>

    <InputContainer {...props}>
      <Half>
        <InputBox>
          <Input type='basic' placeholder='YY' /> /
          <Input type='basic' placeholder='MM' />
        </InputBox>
      </Half>
    </InputContainer>
  </>
);

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: '타이틀이 있는 경우',
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {};
