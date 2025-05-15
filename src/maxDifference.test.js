const maxDifference = require('./maxDifference');

test('should return the maximum difference between any two elements', () => {
  expect(maxDifference([1, 2, 91, 9, 100])).toBe(99); // 100 - 1
  expect(maxDifference([10, 3, 5, 1])).toBe(9);       // 10 - 1
  expect(maxDifference([-5, -2, -30, -1])).toBe(29);  // -1 - (-30)
  expect(maxDifference([0, 0, 0])).toBe(0);           // 0 - 0
});

test('should throw error for invalid input', () => {
  expect(() => maxDifference("not array")).toThrow();
  expect(() => maxDifference([1])).toThrow();
  expect(() => maxDifference([1, "2", 3])).toThrow();
});
