const maxProductOfThree = require('./maxProductOfThree');

test('should return 200 for [-10, -5, 0, 1, 2, 3, 4]', () => {
  expect(maxProductOfThree([-10, -5, 0, 1, 2, 3, 4])).toBe(200);
});

test('should return 60 for [1, 2, 3, 4, 5]', () => {
  expect(maxProductOfThree([1, 2, 3, 4, 5])).toBe(60); // 3*4*5
});

test('should return -6 for [-1, -2, -3]', () => {
  expect(maxProductOfThree([-1, -2, -3])).toBe(-6); // -1*-2*-3
});

test('should return 1000 for [-10, -10, 1, 2, 3, 10]', () => {
  expect(maxProductOfThree([-10, -10, 1, 2, 3, 10])).toBe(1000); // -10 * -10 * 10
});

test('should throw error for array with less than 3 elements', () => {
  expect(() => maxProductOfThree([1, 2])).toThrow("Mảng phải có ít nhất 3 phần tử.");
});
