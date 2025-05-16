function maxProductOfThree(nums) {
  if (nums.length < 3) {
    throw new Error("Mảng phải có ít nhất 3 phần tử.");
  }
  nums.sort((a, b) => a - b);

  const n = nums.length;

  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];// 3 số cuối
  const product2 = nums[0] * nums[1] * nums[n - 1];// 2 số đầu âm và 1 số cuối dương lớn nhất

  return Math.max(product1, product2);
}

module.exports = maxProductOfThree;
