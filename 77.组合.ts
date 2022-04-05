/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  let result = [];
  let current = [];

  function dfs(index: number) {
    // 完整采用 dfs 遍历，但只有符合条件的数组才会加入结果数据
    if (current.length === k) {
      result.push(current.slice());
    }

    for (let i = index; i < n; i++) {
      current.push(i + 1); // 此处 i+1 表示当前数字
      dfs(i + 1); // 此处 i+1 为下一个索引，代表递归进入下一个层次
      current.pop();
    }
  }

  dfs(0);

  return result;
}
// @lc code=end
