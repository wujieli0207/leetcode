/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
const f = [];
const climbStairs = function (n: number): number {
  // 初始化状态数组
  const f = [];
  // 初始化已知值
  f[1] = 1;
  f[2] = 2;
  // 动态更新每一层楼梯对应结果
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  // 返回目标值
  return f[n];
};
// @lc code=end
