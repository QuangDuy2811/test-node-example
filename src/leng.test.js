// leng.test.js
const getLength = require('./leng');

test('Should return length of a normal string', () => {
  expect(getLength('hello')).toBe(5);
});

test('Should return 0 for empty string', () => {
  expect(getLength('')).toBe(0);
});

test('Should work with spaces and symbols', () => {
  expect(getLength('hello world!')).toBe(12);
});
