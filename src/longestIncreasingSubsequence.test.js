const lis = require('./longestIncreasingSubsequence');

test('should return the length of the longest increasing subsequence', () => {
  expect(lis([3, 10, 2, 1, 20])).toBe(3);       // [3, 10, 20]
  expect(lis([50, 3, 10, 7, 40, 80])).toBe(4);  // [3, 7, 40, 80]
  expect(lis([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4); // [2, 3, 7, 101]
  expect(lis([1, 2, 3, 4, 5])).toBe(5);
  expect(lis([5, 4, 3, 2, 1])).toBe(1);
  expect(lis([])).toBe(0);
});

test('should throw error for invalid input', () => {
  expect(() => lis("123")).toThrow();
  expect(() => lis([1, 2, "3"])).toThrow();
});
