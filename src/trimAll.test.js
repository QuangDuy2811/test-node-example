const trimAll  = require('./trimAll');

test('trimAll with multiple spaces', () => {
  expect(trimAll("   hello    world   ")).toBe("hello world");
});

test('trimAll with complex spacing', () => {
  expect(trimAll("   I    am    good      ")).toBe("I am good");
});

test('trimAll with no spaces', () => {
  expect(trimAll("NoSpaces")).toBe("NoSpaces");
});

test('trimAll with only spaces', () => {
  expect(trimAll("      ")).toBe("");
});
