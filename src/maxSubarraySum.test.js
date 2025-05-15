const maxSubarraySum = require('./maxSubarraySum');

test('should return the maximum subarray sum', () => {
  expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6); // [4, -1, 2, 1]
  expect(maxSubarraySum([1, 2, 3, 4])).toBe(10);
  expect(maxSubarraySum([-1, -2, -3, -4])).toBe(-1); // largest negative number
  expect(maxSubarraySum([5])).toBe(5);
  expect(maxSubarraySum([0, -1, 2, 3, -2, 3])).toBe(6); // [2, 3, -2, 3]
});

test('should throw error for invalid input', () => {
  expect(() => maxSubarraySum("not array")).toThrow();
  expect(() => maxSubarraySum([])).toThrow();
  expect(() => maxSubarraySum([1, 2, "3"])).toThrow();
});
