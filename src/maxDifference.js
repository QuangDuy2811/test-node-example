function maxDifference(nums) {
  if (!Array.isArray(nums) || nums.length < 2) {
    throw new Error("Input must be an array with at least two integers.");
  }

  for (const num of nums) {
    if (!Number.isInteger(num)) {
      throw new Error("All elements must be integers.");
    }
  }

  const max = Math.max(...nums);
  const min = Math.min(...nums);

  return max - min;
}

module.exports = maxDifference;
