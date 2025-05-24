// test.js

const { infixToPostfix, evaluatePostfix } = require('./hauto');

test('Chuyển trung tố sang hậu tố', () => {
  expect(infixToPostfix('3+4*2/(1-5)')).toBe('342*15-/+');
  expect(infixToPostfix('(1+2)*3')).toBe('12+3*');
  expect(infixToPostfix('a+b*c')).toBe('abc*+');
});

test('Tính giá trị hậu tố', () => {
  expect(evaluatePostfix('342*15-/+')).toBe(3 + 4 * 2 / (1 - 5)); // 3 + (8 / -4) = 3 - 2 = 1
  expect(evaluatePostfix('12+3*')).toBe((1 + 2) * 3); // 9
  expect(evaluatePostfix('56+')).toBe(11);
  expect(evaluatePostfix('72/')).toBe(3.5);
});