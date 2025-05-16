const reverses = require('./reverses');

describe('reverses function', () => {
  test('reverses a non-empty array of numbers', () => {
    expect(reverses([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  test('reverses a non-empty array of strings', () => {
    expect(reverses(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
  });

  test('reverses an empty array', () => {
    expect(reverses([])).toEqual([]);
  });

  test('reverses a single-element array', () => {
    expect(reverses([42])).toEqual([42]);
  });
});
