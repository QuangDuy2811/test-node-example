const countStringsWithA = require('./countStringsWithA');

test('Đếm chuỗi chứa chữ a', () => {
    const input = ['apple', 'banana', 'cherry', 'grape'];
    expect(countStringsWithA(input)).toBe(3);
});

test('Không có chuỗi nào chứa chữ a', () => {
    const input = ['hello', 'world', 'test'];
    expect(countStringsWithA(input)).toBe(0);
});

test('Xử lý danh sách rỗng', () => {
    expect(countStringsWithA([])).toBe(0);
});

test('Đếm chuỗi có chữ a hoa (phân biệt chữ hoa thường)', () => {
    const input = ['Apple', 'Banana', 'Aardvark'];
    expect(countStringsWithA(input)).toBe(2); 
});

test('Danh sách có phần tử không phải chuỗi', () => {
    const input = ['data', 123, null, 'alpha', undefined];
    expect(countStringsWithA(input)).toBe(2);
});
