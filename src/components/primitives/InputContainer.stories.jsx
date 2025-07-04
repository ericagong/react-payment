import InputContainer from './InputContainer';
import { Half } from '../layouts';
import InputBox from './InputBox';
import Input from './Input';

export default {
  title: 'Primitives/InputContainer',
  component: InputContainer,
};

const Template = (props) => (
  <>
    {/* 카드번호 */}
    <InputContainer {...props}>
      <InputBox>
        <Input placeholder='카드번호 1' /> -
        <Input placeholder='카드번호 2' /> -
        <Input nativeType='password' placeholder='카드번호 3' /> -
        <Input nativeType='password' placeholder='카드번호 4' />
      </InputBox>
    </InputContainer>
    {/* 만료일 */}
    <InputContainer {...props}>
      <Half>
        <InputBox>
          <Input placeholder='YY' /> /
          <Input placeholder='MM' />
        </InputBox>
      </Half>
    </InputContainer>
    {/* 카드 소유자 이름 */}
    <InputContainer {...props}>
      <Input placeholder='카드에 표시된 이름과 동일하게 입력하세요.' />
    </InputContainer>
    {/* 보안코드 */}
    <InputContainer {...props}>
      <Half>
        <Input nativeType='password' />
      </Half>
    </InputContainer>
  </>
);

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: '타이틀',
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {};
