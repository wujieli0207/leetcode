/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  // 只用一个一维数组存储结果
  const dp = new Array(rowIndex + 1).fill(1);

  for (let i = 0; i < rowIndex + 1; i++) {
    // 因为第 j 个元素的计算依赖，第 j-1 个元素和第 j 个元素
    // 所以要从后往前遍历，保证后面的值先计算出来
    for (let j = i - 1; j > 0; j--) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }

  return dp;
}
// @lc code=end
