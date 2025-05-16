function switchOrder(arr, id, newOrder) {
  // clone mảng tránh thay đổi trực tiếp
  const newArr = [...arr];

  // Tìm index và object cần thay đổi
  const index = newArr.findIndex(o => o.id === id);
  if (index === -1) return arr;

  // Lấy object cần thay đổi, cập nhật order
  const objToMove = {...newArr[index], order: newOrder};
  newArr.splice(index, 1); // loại bỏ obj cũ

  // Thêm lại obj với order mới
  newArr.push(objToMove);

  // Sắp xếp lại theo order mới (chưa đúng vị trí) => ta cần chèn đúng chỗ newOrder
  newArr.sort((a, b) => a.order - b.order);

  // Cập nhật lại order tuần tự từ 0
  for (let i = 0; i < newArr.length; i++) {
    newArr[i].order = i;
  }

  return newArr;
}
module.exports = switchOrder;