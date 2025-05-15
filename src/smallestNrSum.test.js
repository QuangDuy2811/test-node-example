const findSmallestUnrepresentableSum = require('./smallestNrSum');

test('should return smallest unrepresentable sum', () => {
  expect(findSmallestUnrepresentableSum([1, 2, 3, 7, 8, 20])).toBe(42);
  expect(findSmallestUnrepresentableSum([1, 1, 1, 1])).toBe(5);
  expect(findSmallestUnrepresentableSum([1, 2, 5, 10, 20, 40])).toBe(4);
  expect(findSmallestUnrepresentableSum([2, 3, 4, 5])).toBe(1); // 1 không tạo được
});

test('should throw error for invalid input', () => {
  expect(() => findSmallestUnrepresentableSum([])).toThrow();
  expect(() => findSmallestUnrepresentableSum("string")).toThrow();
  expect(() => findSmallestUnrepresentableSum([1, -2, 3])).toThrow();
  expect(() => findSmallestUnrepresentableSum([1, 2.5, 3])).toThrow();
});
