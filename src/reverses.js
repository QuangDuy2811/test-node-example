function reverses(arr) {
  const reversed = [];
  arr.forEach(item => {
    reversed.unshift(item); // Thêm phần tử vào đầu mảng
  });
  return reversed;
}

module.exports = reverses;
