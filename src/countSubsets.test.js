const countSubsetsWithSum = require('./countSubsets');

test('Example 1: [1,2,3,4,5], target=5', () => {
  expect(countSubsetsWithSum([1, 2, 3, 4, 5], 5)).toBe(2);
});

test('Example 2: [1,1,2,3,4], target=5', () => {
  expect(countSubsetsWithSum([1, 1, 2, 3, 4], 5)).toBe(4);
});
