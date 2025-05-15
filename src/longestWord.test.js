const longestWord = require('./longestWord');

test('should return the longest word', () => {
  expect(longestWord(["apple", "banana", "cherry", "date"])).toBe("banana");
  expect(longestWord(["a", "ab", "abc", "abcd"])).toBe("abcd");
  expect(longestWord(["same", "size", "four"])).toBe("same"); // đầu tiên dài nhất
  expect(longestWord(["oneword"])).toBe("oneword");
});

test('should throw error for invalid input', () => {
  expect(() => longestWord([])).toThrow();
  expect(() => longestWord("not array")).toThrow();
  expect(() => longestWord(["valid", 123, "string"])).toThrow();
});
