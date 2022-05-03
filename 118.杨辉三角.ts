/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const dp = [];

  // 状态转移方程：当前行的值 dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
  for (let i = 0; i < numRows; i++) {
    // 先生成一行长度为 i，全部都是 1 的数组
    const row = new Array(i + 1).fill(1);

    // 行两边都是 1，不用处理
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }

    dp.push(row);
  }

  return dp;
}
// @lc code=end
