function bubbleSortPasses(arr) {
  let passes = 0;
  let n = arr.length;
  let array = [...arr]; // copy mảng để không làm thay đổi mảng gốc

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    passes++;

    if (!swapped) {
      // Nếu lần lặp này không hoán đổi phần tử nào => mảng đã sắp xếp xong
      break;
    }
  }

  return passes;
}

module.exports = bubbleSortPasses;
