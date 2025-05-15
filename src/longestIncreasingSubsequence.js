function longestIncreasingSubsequence(nums) {
  if (!Array.isArray(nums)) {
    throw new Error("Input must be an array of integers.");
  }

  for (const num of nums) {
    if (!Number.isInteger(num)) {
      throw new Error("All elements must be integers.");
    }
  }

  const n = nums.length;
  if (n === 0) return 0;

  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

module.exports = longestIncreasingSubsequence;
