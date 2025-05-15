const countWords = require('./countWords');

test('Đếm số từ trong chuỗi đơn giản', () => {
    expect(countWords("Hello world")).toBe(2);
});

test('Đếm số từ trong chuỗi có nhiều khoảng trắng', () => {
    expect(countWords("  This   is   a test  ")).toBe(4);
});

test('Đếm số từ trong chuỗi rỗng', () => {
    expect(countWords("")).toBe(0);
});

test('Đếm số từ trong chuỗi chỉ toàn khoảng trắng', () => {
    expect(countWords("     ")).toBe(0);
});

test('Đếm số từ khi có ký tự xuống dòng và tab', () => {
    expect(countWords("Line1\nLine2\tLine3")).toBe(3);
});
