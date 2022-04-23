/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  let maxLength = 0;

  // 初始化数组中每个索引位置的状态为 1（1 代表此事最大递增子序列的长度为 1）
  const dp = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 如果当前值比之前的大的话，说明遇到了一个可以延长的子序列，就更新当前值的状态
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    // 更新最长子序列的数值
    if (dp[i] > maxLength) {
      maxLength = dp[i];
    }
  }

  return maxLength;
}
// @lc code=end
