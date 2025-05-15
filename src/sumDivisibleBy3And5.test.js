const sumDivisibleBy3And5 = require('./sumDivisibleBy3And5');

test('should return the sum of numbers divisible by both 3 and 5', () => {
  expect(sumDivisibleBy3And5([15, 30, 45, 10, 9])).toBe(90); // 15+30+45
  expect(sumDivisibleBy3And5([1, 2, 3, 4, 5])).toBe(0);
  expect(sumDivisibleBy3And5([0, 15, 60])).toBe(75); // 0 is divisible too
  expect(sumDivisibleBy3And5([])).toBe(0);
});

test('should throw error for invalid input', () => {
  expect(() => sumDivisibleBy3And5("not array")).toThrow();
  expect(() => sumDivisibleBy3And5([15, "30", 45])).toThrow();
});
