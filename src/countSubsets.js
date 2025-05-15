const combinations = (arr, r) => {
  const result = [];
  const comb = [];

  function backtrack(start, depth) {
    if (depth === r) {
      result.push([...comb]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      comb.push(arr[i]);
      backtrack(i + 1, depth + 1);
      comb.pop();
    }
  }

  backtrack(0, 0);
  return result;
};

function countSubsetsWithSum(nums, target) {
  let count = 0;
  const n = nums.length;

  for (let r = 2; r <= n; r++) {
    const combs = combinations(nums, r);
    for (const c of combs) {
      const sum = c.reduce((a, b) => a + b, 0);
      if (sum === target) {
        count++;
      }
    }
  }
  return count;
}

module.exports = countSubsetsWithSum;
