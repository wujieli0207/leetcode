/*
 * @lc app=leetcode.cn id=561 lang=typescript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  // 我们每次选择都想选个大的，但是最大的不能选（因为 min），所以每次选第二大的
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < nums.length; i += 2) {
    result += Math.min(nums[i], nums[i + 1]);
  }

  return result;
}
// @lc code=end
