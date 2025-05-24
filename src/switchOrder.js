function switchOrder(arr, id, newOrder) {
  const newArr = arr.map(item => ({ ...item }));

  const itemToMove = newArr.find(item => item.id === id);
  if (!itemToMove) return newArr;

  const oldOrder = itemToMove.order;
  const maxOrder = newArr.length - 1;
  if (newOrder < 0) newOrder = 0;
  if (newOrder > maxOrder) newOrder = maxOrder;

  if (oldOrder === newOrder) return newArr;

  if (newOrder < oldOrder) {
    newArr.forEach(item => {
      if (item.order >= newOrder && item.order < oldOrder) {
        item.order++;
      }
    });
  } else {
    newArr.forEach(item => {
      if (item.order > oldOrder && item.order <= newOrder) {
        item.order--;
      }
    });
  }

  itemToMove.order = newOrder;

  newArr.sort((a, b) => a.order - b.order);

  return newArr;
}

module.exports = switchOrder;

// bai 5.8