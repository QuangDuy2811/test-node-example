const longestIncreasingSubseqWithDiff1 = require('./longestIncreasingSubseqWithDiff1');

test('should return 3 for [1, 2, 3, 8, 6, 3]', () => {
  expect(longestIncreasingSubseqWithDiff1([1, 2, 3, 8, 6, 3])).toBe(3);
});

test('should return 6 for longest increasing contiguous subsequence in [1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9]', () => {
  expect(longestIncreasingSubseqWithDiff1([1, 2, 3, 8, 3, 2, 4, 5, 6, 7, 8, 9])).toBe(6);
});

test('should return 0 for empty array', () => {
  expect(longestIncreasingSubseqWithDiff1([])).toBe(0);
});

test('should return 1 for single element array', () => {
  expect(longestIncreasingSubseqWithDiff1([10])).toBe(1);
});

test('should return 2 for [3, 4, 6, 7, 9]', () => {
  expect(longestIncreasingSubseqWithDiff1([3, 4, 6, 7, 9])).toBe(2);
});

test('should return 4 for [5, 6, 7, 8, 2, 3]', () => {
  expect(longestIncreasingSubseqWithDiff1([5, 6, 7, 8, 2, 3])).toBe(4);
});
