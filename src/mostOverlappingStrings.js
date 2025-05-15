function countCommonChars(str1, str2) {
  const map1 = new Map();
  const map2 = new Map();

  for (const ch of str1) {
    map1.set(ch, (map1.get(ch) || 0) + 1);
  }
  for (const ch of str2) {
    map2.set(ch, (map2.get(ch) || 0) + 1);
  }

  let commonCount = 0;
  for (const [ch, count1] of map1.entries()) {
    if (map2.has(ch)) {
      commonCount += Math.min(count1, map2.get(ch));
    }
  }
  return commonCount;
}

function mostOverlappingStrings(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Input must be an array with at least two strings.");
  }
  for (const s of arr) {
    if (typeof s !== "string") {
      throw new Error("All elements must be strings.");
    }
  }

  let maxOverlap = -1;
  let resultPair = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const overlap = countCommonChars(arr[i], arr[j]);
      if (overlap > maxOverlap) {
        maxOverlap = overlap;
        resultPair = [arr[i], arr[j]];
      }
    }
  }

  return resultPair;
}

module.exports = mostOverlappingStrings;
