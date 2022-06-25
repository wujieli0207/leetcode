/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 定义股票最低价格为无限大
  let minPrice = Infinity;

  // 定义最大利润
  let maxResult = 0;

  // 最大利润 = 当前股票价格 - 最低价格 = prices[i] - minPrice

  for (let i = 0; i < prices.length; i++) {
    // 分别找到最小价格和最大利润
    minPrice = Math.min(minPrice, prices[i]);

    maxResult = Math.max(maxResult, prices[i] - minPrice);
  }

  return maxResult;
}
// @lc code=end
