const sortStringsAlphabetically = require('./sortStrings');

test('Sắp xếp danh sách chuỗi theo thứ tự bảng chữ cái', () => {
    const input = ['banana', 'apple', 'grape', 'cherry'];
    const expected = ['apple', 'banana', 'cherry', 'grape'];
    expect(sortStringsAlphabetically(input)).toEqual(expected);
});

test('Trả về mảng rỗng nếu đầu vào rỗng', () => {
    expect(sortStringsAlphabetically([])).toEqual([]);
});

test('Sắp xếp danh sách có chữ hoa và chữ thường', () => {
    const input = ['banana', 'Apple', 'grape'];
    const expected = ['Apple', 'banana', 'grape'];
    expect(sortStringsAlphabetically(input)).toEqual(expected);
});

test('Không làm thay đổi mảng nếu đã được sắp xếp', () => {
    const input = ['apple', 'banana', 'cherry'];
    expect(sortStringsAlphabetically(input)).toEqual(['apple', 'banana', 'cherry']);
});
