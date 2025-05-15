// test.js
const secondSmallest = require('./secondSmallest');

test('should return the second smallest number', () => {
  expect(secondSmallest([10, 20, 30, 40])).toBe(20);
  expect(secondSmallest([5, 5, 5, 3, 1])).toBe(3);
  expect(secondSmallest([-1, -2, -3, -4])).toBe(-3);
  expect(secondSmallest([100, 100, 99])).toBe(100);
});

test('should throw error for invalid input', () => {
  expect(() => secondSmallest([5])).toThrow();
  expect(() => secondSmallest([5, 5, 5])).toThrow();
  expect(() => secondSmallest("not array")).toThrow();
});
