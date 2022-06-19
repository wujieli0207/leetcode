/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  if (nums.length < 2) return false;

  const set = new Set(nums);

  if (nums.length !== set.size) {
    return true;
  }
  return false;
}
// @lc code=end
