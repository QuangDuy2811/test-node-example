function uniqArrayObject(arr) {
  const seen = new Set();
  const result = [];

  for (const obj of arr) {
    // Chuẩn hóa object thành string có thứ tự key cố định để so sánh
    const normalized = JSON.stringify(Object.keys(obj).sort().reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {}));

    if (!seen.has(normalized)) {
      seen.add(normalized);
      result.push(obj);
    }
  }

  return result;
}

module.exports = uniqArrayObject;
