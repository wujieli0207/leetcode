/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  // 定义每个目标总额对应最小硬币个数
  const f = [];
  // 提前定义已知情况
  f[0] = 0;
  // 遍历 [1, amount] 这个区间的硬币总额(0 已经被定义过了)
  for (let i = 1; i <= amount; i++) {
    // 因为是求最小值，所以预设金额为无穷大，保证更够被最小值更新
    f[i] = Infinity;
    coins.forEach((coin) => {
      if (i - coin >= 0) {
        // 注意：+1 表示拿走的硬币
        f[i] = Math.min(f[i], f[i - coin] + 1);
      }
    });
  }
  // 如果目标总额对应金额是无穷大，说明没有解，直接返回 -1 即可
  if (f[amount] === Infinity) {
    return -1;
  }
  // 如果有解直接返回目标金额的解
  return f[amount];
}
// @lc code=end
