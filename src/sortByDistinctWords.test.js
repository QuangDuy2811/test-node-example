const sortByDistinctWords = require('./sortByDistinctWords');

test('should sort by string length descending and alphabetically when equal length', () => {
  const input = [
    'the quick brown fox',
    'the lazy dog jumps over the fence',
    'the cat in the hat'
  ];
  const expected = [
    'the lazy dog jumps over the fence',
    'the quick brown fox',
    'the cat in the hat'
  ];
  expect(sortByDistinctWords(input)).toEqual(expected);
});

test('should sort alphabetically if all lengths are equal', () => {
  const input = ['dog', 'cat', 'bat'];
  const expected = ['bat', 'cat', 'dog'];
  expect(sortByDistinctWords(input)).toEqual(expected);
});

test('should sort correctly with empty string and one-word strings', () => {
  const input = ['hello', '', 'world', 'a'];
  const expected = ['hello', 'world', 'a', ''];
  expect(sortByDistinctWords(input)).toEqual(expected);
});
