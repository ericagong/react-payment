import {
  onlyNumber,
  underSixteen,
  formatCardNumber,
} from '../src/components/utils/utils.js';

describe('카드번호 입력 로직 유틸 함수', () => {
  test('onlyNumber: 숫자 이외의 입력값은 제거한다.', () => {
    expect(onlyNumber('')).toBe('');
    expect(onlyNumber('0000')).toBe('0000');
    expect(onlyNumber('0000-0000-0000-0000')).toBe('0000000000000000');
    expect(onlyNumber('12 34-56')).toBe('123456');
    expect(onlyNumber('hello123')).toBe('123');
    expect(onlyNumber('1234abcd5678!@90')).toBe('1234567890');
  });

  test('underSixteen: 16자리를 초과하는 입력값은 제거한다.', () => {
    expect(underSixteen('')).toBe('');
    expect(underSixteen('0000')).toBe('0000');
    expect(underSixteen('00000000000014')).toBe('00000000000014');
    expect(underSixteen('000000000000015')).toBe('000000000000015');
    expect(underSixteen('0000000000000016')).toBe('0000000000000016');
    expect(underSixteen('00000000000000017')).toBe('0000000000000001');
  });

  test('formatCardNumber: 마스킹 및 하이픈 처리', () => {
    expect(formatCardNumber('')).toBe('');
    expect(formatCardNumber('1234')).toBe('1234');
    expect(formatCardNumber('12341')).toBe('1234-1');
    expect(formatCardNumber('12341234')).toBe('1234-1234');
    expect(formatCardNumber('1234123412')).toBe('1234-1234-**');
    expect(formatCardNumber('123412341234')).toBe('1234-1234-****');
    expect(formatCardNumber('1234123412341')).toBe('1234-1234-****-*');
    expect(formatCardNumber('1234123412341234')).toBe('1234-1234-****-****');
  });
});
