const longestSubstring = require('./longestSubstring');

test('should return 2 for ["abcdefg", "abcde", "abcdef", "ab", "abc"]', () => {
  expect(longestSubstring(["abcdefg", "abcde", "abcdef", "ab", "abc"])).toBe(2);
});

test('should return 7 for ["programming", "programmer", "program"]', () => {
  expect(longestSubstring(["programming", "programmer", "program"])).toBe(7);
});

test('should return 1 for ["hello", "world", "jelly"]', () => {
  expect(longestSubstring(["hello", "world", "jelly"])).toBe(1);
});

test('should return 2 for ["abcd", "ab", "abcd", "ab", "abcd"]', () => {
  expect(longestSubstring(["abcd", "ab", "abcd", "ab", "abcd"])).toBe(2);
});

test('should return 0 for ["a", "b", "c"]', () => {
  expect(longestSubstring(["a", "b", "c"])).toBe(0);
});

test('should return 4 for ["same", "same", "same"]', () => {
  expect(longestSubstring(["same", "same", "same"])).toBe(4);
});

test('should return 0 for empty array', () => {
  expect(longestSubstring([])).toBe(0);
});

test('should return length of the only string if array has one element', () => {
  expect(longestSubstring(["hello"])).toBe(5);
});
