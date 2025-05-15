function maxSubarraySum(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    throw new Error("Input must be a non-empty array of integers.");
  }

  for (const num of nums) {
    if (!Number.isInteger(num)) {
      throw new Error("All elements must be integers.");
    }
  }

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
