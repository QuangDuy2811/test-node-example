const mostOverlappingStrings = require('./mostOverlappingStrings');

test('should return two strings with the largest number of overlapping characters', () => {
  expect(mostOverlappingStrings(["hello", "world", "foobar", "barfoo", "he", "llo"]))
    .toEqual(expect.arrayContaining(["foobar", "barfoo"]));

  expect(mostOverlappingStrings(["hello", "world", "foobar", "barfoo", "he", "llo", "foobars", "abc", "cba"]))
    .toEqual(expect.arrayContaining(["foobar", "barfoo"]));

  expect(mostOverlappingStrings(["abc", "bca", "xyz", "yxz"]))
    .toEqual(expect.arrayContaining(["abc", "bca"]));  // 3 ký tự trùng
});

test('should throw error for invalid input', () => {
  expect(() => mostOverlappingStrings("not array")).toThrow();
  expect(() => mostOverlappingStrings(["hello", 123])).toThrow();
  expect(() => mostOverlappingStrings(["onlyone"])).toThrow();
});
