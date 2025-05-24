const switchOrder = require('./switchOrder');

describe('switchOrder function', () => {
  test('chuyển object id 9 lên vị trí order = 1', () => {
    const arr = [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 3 },
    ];
    const result = switchOrder(arr, 9, 1);
    expect(result).toEqual([
      { id: 10, order: 0 },
      { id: 9, order: 1 },
      { id: 12, order: 2 },
      { id: 11, order: 3 },
    ]);
  });

  test('chuyển object id 12 xuống vị trí order = 3', () => {
    const arr = [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 3 },
    ];
    const result = switchOrder(arr, 12, 3);
    expect(result).toEqual([
      { id: 10, order: 0 },
      { id: 9, order: 1 },
      { id: 11, order: 2 },
      { id: 12, order: 3 },
    ]);
  });

  test('giữ nguyên khi id không tồn tại', () => {
    const arr = [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 3 },
    ];
    const result = switchOrder(arr, 100, 1);
    expect(result).toEqual(arr);
  });

  test('giữ nguyên khi newOrder = order hiện tại', () => {
    const arr = [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 3 },
    ];
    const result = switchOrder(arr, 9, 2);
    expect(result).toEqual(arr);
  });

  test('newOrder vượt quá giới hạn maxOrder', () => {
    const arr = [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
    ];
    const result = switchOrder(arr, 10, 10);
    expect(result).toEqual([
      { id: 12, order: 0 },
      { id: 9, order: 1 },
      { id: 10, order: 2 },
    ]);
  });

  test('newOrder nhỏ hơn 0', () => {
    const arr = [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
    ];
    const result = switchOrder(arr, 9, -5);
    expect(result).toEqual([
      { id: 9, order: 0 },
      { id: 10, order: 1 },
      { id: 12, order: 2 },
    ]);
  });
});
