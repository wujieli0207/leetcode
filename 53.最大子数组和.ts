/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let maxSum = nums[0];
  let partialSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // 状态转移方程，当前最大值 = 前一个元素 + 当前元素 和 当前元素 中 最大的一个
    partialSum = Math.max(partialSum + element, element);
    maxSum = Math.max(maxSum, partialSum);
  }
  return maxSum;
}
// @lc code=end
