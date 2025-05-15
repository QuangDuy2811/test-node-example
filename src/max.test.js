const getMax = require('./max');

test('Lấy số lớn nhất từ mảng số dương', () => {
  expect(getMax([1, 5, 3, 9, 2])).toBe(9);
});

test('Lấy số lớn nhất từ mảng có số âm', () => {
  expect(getMax([-10, -5, -1, -20])).toBe(-1);
});

test('Trả về null nếu mảng rỗng', () => {
  expect(getMax([])).toBeNull();
});

test('Trả về số duy nhất nếu chỉ có 1 phần tử', () => {
  expect(getMax([42])).toBe(42);
});

test('Trả về null nếu đầu vào không phải mảng', () => {
  expect(getMax('abc')).toBeNull();
});
