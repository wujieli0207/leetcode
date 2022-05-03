/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // 中点 < 最右边，说明(mid, right] 这个区间不用再查找
    if (nums[mid] < nums[right]) {
      right = mid;
    } // 中点 >= 最右边, 说明[left, mid] 这个区间都不用再查找
    else {
      left = mid + 1;
    }
  }

  return nums[left];
}
// @lc code=end
