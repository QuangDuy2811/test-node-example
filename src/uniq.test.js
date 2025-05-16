const uniq = require('./uniq');

describe('uniq function', () => {
  test('removes duplicates from array of numbers', () => {
    expect(uniq([1, 2, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  });

  test('removes duplicates from array of strings', () => {
    expect(uniq(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('returns empty array if input empty', () => {
    expect(uniq([])).toEqual([]);
  });

  test('returns same array if no duplicates', () => {
    expect(uniq([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
