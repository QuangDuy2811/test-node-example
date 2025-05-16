const findMaxOverlapPair = require('./findMaxOverlapPair');

test('should return pair with max overlap length >= k (simple case)', () => {
  const input = ['abcde', 'cdefg', 'defxyz', 'xyzabc'];
  const k = 2;
  const result = findMaxOverlapPair(input, k);
  expect(result).toEqual(['abcde', 'cdefg']); // 'cde' overlap
});

test('should return correct pair with overlap length 3', () => {
  const input = ['hello', 'lloabc', 'world', 'abcxyz'];
  const k = 3;
  const result = findMaxOverlapPair(input, k);
  expect(result).toEqual(['hello', 'lloabc']); // 'llo' overlap
});

test('should return empty strings when no overlap >= k', () => {
  const input = ['apple', 'banana', 'carrot'];
  const k = 3;
  const result = findMaxOverlapPair(input, k);
  expect(result).toEqual(['', '']);
});

test('should handle full string overlap', () => {
  const input = ['abcd', 'cdef', 'efgh'];
  const k = 2;
  const result = findMaxOverlapPair(input, k);
  expect(result).toEqual(['abcd', 'cdef']); // 'cd' overlap
});

