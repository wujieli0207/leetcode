/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  // 滑动窗口法：如果窗口范围内的值合计大于 target，则窗口向左收缩，否则窗口向右扩张

  let result = Infinity; // 结果先设置为无限大，才能不断取小
  let start = 0;
  let end = 0;

  //  使用 sum 计算每个每次循环元素的合计
  let sum = 0;

  while (end < nums.length) {
    sum += nums[end];

    // 当 sum 大于等于 target 时，start 指针向左移动直到 sum 小于 target，同时 sum 开始减小
    // 如果恰好等于的话还会进行一次循环，所以每次遍历都更新 result 的长度就可以了
    while (sum >= target) {
      result = Math.min(result, end - start + 1);
      sum -= nums[start];
      start++;
    }

    end++;
  }

  return result === Infinity ? 0 : result;
}
// @lc code=end
