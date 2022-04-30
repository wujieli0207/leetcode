/*
 * @lc app=leetcode.cn id=1991 lang=typescript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
function findMiddleIndex(nums: number[]): number {
  if (nums.length === 0) return -1;

  if (nums.length === 1) return 0;

  // 先求出总和，再遍历数组，找到左侧总和*2 + 当前值 等于 合计即可
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (2 * left + nums[i] === sum) {
      return i;
    }
    left += nums[i];
  }

  return -1;
}
// @lc code=end
