const sortNumbersAscending = require('./sortNumbers');

test('Sắp xếp danh sách số tăng dần', () => {
    expect(sortNumbersAscending([5, 1, 9, 3, 7, 2])).toEqual([1, 2, 3, 5, 7, 9]);
});

test('Trả về mảng rỗng nếu đầu vào là mảng rỗng', () => {
    expect(sortNumbersAscending([])).toEqual([]);
});

test('Sắp xếp đúng nếu mảng đã được sắp', () => {
    expect(sortNumbersAscending([1, 2, 3])).toEqual([1, 2, 3]);
});

test('Sắp xếp mảng có số âm', () => {
    expect(sortNumbersAscending([-3, 2, -1, 5, 0])).toEqual([-3, -1, 0, 2, 5]);
});

test('Sắp xếp mảng có số trùng nhau', () => {
    expect(sortNumbersAscending([4, 2, 4, 1])).toEqual([1, 2, 4, 4]);
});
