/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];

  // 对数组升序排序
  nums = nums.sort((a, b) => a - b);

  // 注意最后两位无需遍历，因为已经有两个对撞指针处理过了
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1; // 定义左对撞指针
    let right = nums.length - 1; // 定义右对撞指针

    // 跳过遍历时的重复元素
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (left < right) {
      // 当三个数的和相加小于 0 时，左指针向右移动一位，然后排除左指针移动过程中的重复元素
      if (nums[i] + nums[left] + nums[right] < 0) {
        left++;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
      // 当三个数的和相加大于 0 时，右指针向左移动一位，然后排除右指针移动过程中的重复元素
      else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
      // 两数相等时，左右指针各移动一位，然后排除重复元素
      else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return result;
}
// @lc code=end
