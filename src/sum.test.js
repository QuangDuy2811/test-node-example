const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 4 + 5 to equal 9", () => {
  expect(sum(4, 5)).toBe(9);
});

test("adds 100 + 122 to equal 222", () => {
  expect(sum(100, 122)).toBe(222);
});

test("adds -1 + -2 to equal -3", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("adds -1 + 9 to equal 8", () => {
  expect(sum(-1, 9)).toBe(8);
});