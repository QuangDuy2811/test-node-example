const findMedian = require('./findMedian');

test('Tìm trung vị trong danh sách lẻ phần tử', () => {
    expect(findMedian([3, 1, 2])).toBe(2);
});

test('Tìm trung vị trong danh sách chẵn phần tử', () => {
    expect(findMedian([4, 2, 1, 3])).toBe(2.5);
});

test('Trả về null nếu danh sách rỗng', () => {
    expect(findMedian([])).toBeNull();
});

test('Tìm trung vị với số âm và dương', () => {
    expect(findMedian([-3, -1, 2, 4, 0])).toBe(0);
});

test('Tìm trung vị khi có số trùng nhau', () => {
    expect(findMedian([5, 1, 1, 5, 3])).toBe(3);
});
