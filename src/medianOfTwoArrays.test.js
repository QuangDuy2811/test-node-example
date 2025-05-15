const findMedianOfTwoArrays = require('./medianOfTwoArrays');

test('should return correct median for combined array (odd total)', () => {
  expect(findMedianOfTwoArrays([1, 3], [2])).toBe(2);
});

test('should return correct median for combined array (even total)', () => {
  expect(findMedianOfTwoArrays([1, 2], [3, 4])).toBe(2.5);
});

test('should handle arrays with negative numbers', () => {
  expect(findMedianOfTwoArrays([-5, -1, 0], [1, 2, 3])).toBe(0.5);
});

test('should handle one empty array', () => {
  expect(findMedianOfTwoArrays([], [10])).toBe(10);
});

test('should throw error for non-array input', () => {
  expect(() => findMedianOfTwoArrays([1, 2], "not array")).toThrow();
});

test('should throw error for both arrays empty', () => {
  expect(() => findMedianOfTwoArrays([], [])).toThrow();
});
