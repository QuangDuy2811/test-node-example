const bubbleSortPasses = require('./bubbleSort');

test('should return correct passes for [3,1,4,2,6,5]', () => {
  expect(bubbleSortPasses([3,1,4,2,6,5])).toBe(3);
});

test('should return 1 for already sorted array', () => {
  expect(bubbleSortPasses([1,2,3,4,5])).toBe(1);
});

test('should return correct passes for reverse sorted array', () => {
  expect(bubbleSortPasses([5,4,3,2,1])).toBe(4);
});

test('should return 0 for empty array', () => {
  expect(bubbleSortPasses([])).toBe(0);
});

test('should return 0 for array with single element', () => {
  expect(bubbleSortPasses([10])).toBe(0);
});
