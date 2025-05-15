    const longestCommonSubstring = require('./longestCommonSubstring');

test('should return the longest common substring', () => {
  expect(longestCommonSubstring("abcdef", "zcdemf")).toBe("cde");
  expect(longestCommonSubstring("abc", "abc")).toBe("abc");
  expect(longestCommonSubstring("abc", "def")).toBe("");
  expect(longestCommonSubstring("geeksforgeeks", "geeksquiz")).toBe("geeks");
  expect(longestCommonSubstring("abcdxyz", "xyzabcd")).toBe("abcd");
});

test('should throw error for invalid input', () => {
  expect(() => longestCommonSubstring(123, "abc")).toThrow();
  expect(() => longestCommonSubstring("abc", null)).toThrow();
  expect(() => longestCommonSubstring([], "abc")).toThrow();
});
