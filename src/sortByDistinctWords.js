function sortByDistinctWords(strings) {
  const result = [];

  strings.forEach(str => {
    result.push(str);
  });

  result.sort((a, b) => {
    if (b.length !== a.length) {
      return b.length - a.length; // sắp xếp theo độ dài giảm dần
    }
    return a.localeCompare(b); // nếu bằng nhau, sắp theo bảng chữ cái
  });

  return result;
}

module.exports = sortByDistinctWords;
