/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  return nums1.filter((item, index) => {
    if (nums2.includes(item)) {
      nums2[nums2.findIndex((e) => e === item)] = Infinity;
      return true;
    }
    return false;
  });
}
// @lc code=end
