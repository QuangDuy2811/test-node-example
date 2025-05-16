const chunk = require('./chunk');

describe('chunk function', () => {
  test('chunk size 2', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('chunk size 3', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test('chunk size bigger than array length', () => {
    expect(chunk(['x', 'y'], 5)).toEqual([['x', 'y']]);
  });

  test('chunk size is zero', () => {
    expect(chunk(['a', 'b'], 0)).toEqual([]);
  });

  test('empty array', () => {
    expect(chunk([], 3)).toEqual([]);
  });
});
