const longestPalindromeLength = require('./longestPalindromeLength');

test('should return 21 for "A man a plan a canal Panama"', () => {
  expect(longestPalindromeLength("A man a plan a canal Panama")).toBe(21);
});

test('should handle empty string', () => {
  expect(longestPalindromeLength("")).toBe(0);
});

test('should handle string with all unique characters', () => {
  expect(longestPalindromeLength("abc")).toBe(1); // only one char in center
});

test('should handle string with all even counts', () => {
  expect(longestPalindromeLength("aabbcc")).toBe(6);
});

test('should throw error for non-string input', () => {
  expect(() => longestPalindromeLength(123)).toThrow();
});
