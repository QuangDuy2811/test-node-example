const findShortestString = require('./findshort');

test('Trả về chuỗi ngắn nhất trong danh sách', () => {
    const input = ['apple', 'banana', 'kiwi', 'grape'];
    expect(findShortestString(input)).toBe('kiwi');
});

test('Trả về chuỗi duy nhất nếu chỉ có một phần tử', () => {
    const input = ['hello'];
    expect(findShortestString(input)).toBe('hello');
});

test('Trả về null nếu mảng rỗng', () => {
    const input = [];
    expect(findShortestString(input)).toBeNull();
});

test('Trả về chuỗi đầu tiên nếu có nhiều chuỗi cùng độ dài ngắn nhất', () => {
    const input = ['dog', 'cat', 'bat'];
    expect(findShortestString(input)).toBe('dog'); // tất cả dài 3 ký tự
});
