function uniq(arr) {
  const result = [];
  arr.forEach(item => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

module.exports = uniq;
