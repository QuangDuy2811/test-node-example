const square = require('./square'); // Đảm bảo đường dẫn đúng nếu file không cùng thư mục

test('square of 2 should be 4', () => {
    expect(square(2)).toBe(4);
});

test('square of -3 should be 9', () => {
    expect(square(-3)).toBe(9);
});

test('square of 0 should be 0', () => {
    expect(square(0)).toBe(0);
});

test('square of 5 should be 25', () => {
    expect(square(5)).toBe(25);
});
