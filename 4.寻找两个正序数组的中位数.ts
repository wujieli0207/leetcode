/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 解法一：暴力求解，但是时间复杂度为 O(m+n)，注意题目要求时间复杂度应该为 O(log (m+n))
  //   let mid = 0;
  //   const array = [...nums1, ...nums2];
  //   // 注意 sort 默认使用字符串排序，数字排序需要指定参考函数
  //   array.sort((a, b) => a - b);
  //   // 如果数组长度为单数
  //   if (array.length % 2 !== 0) {
  //     mid = array[Math.floor(array.length / 2)];
  //   } else {
  //     mid = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
  //   }
  //   return mid;
  // 解法二：二分查找
}
// @lc code=end
