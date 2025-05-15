// test.js
const secondLargest = require('./secondLargest');

test('should return the second largest number', () => {
  expect(secondLargest([10, 20, 30, 40])).toBe(30);
  expect(secondLargest([5, 5, 5, 3, 1])).toBe(3);
  expect(secondLargest([-1, -2, -3, -4])).toBe(-2);
  expect(secondLargest([100, 100, 99])).toBe(99);
});

test('should throw error for invalid input', () => {
  expect(() => secondLargest([5])).toThrow();
  expect(() => secondLargest([5, 5, 5])).toThrow();
  expect(() => secondLargest("not array")).toThrow();
});
