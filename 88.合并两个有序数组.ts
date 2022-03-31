/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // 指向第一个数组存在元素的末尾
  let j = n - 1; // 指向第二个数组存在元素的末尾
  let k = m + n - 1; // 指向第一个数组末尾

  // 将两个数组中较大的放大第一个数组末尾
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  // 如果第一个数组存在元素被提前遍历完，把第二个数组的剩余元素依次放到第一个数组之前就好
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
// @lc code=end
