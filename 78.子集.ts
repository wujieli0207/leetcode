/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const result = [];
  const current = [];

  function dfs(index: number) {
    result.push(current.slice());

    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);

      // 递归遍历下一层索引
      dfs(i + 1);

      current.pop();
    }
  }
  // 开始索引 0 开始执行递归
  dfs(0);

  return result;
}
// @lc code=end
