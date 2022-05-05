/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  // 使用 count 记录岛屿数量合计
  let count = 0;

  // 遍历每一个数字，如果是 “1” 就将岛屿数量 +1，当前值重置为 “0”，
  // 通过 深度优先遍历 然后判断他的 上下左右 四个方向是否都是 “1”
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;

        dfs(grid, i, j);
      }
    }
  }

  return count;

  function dfs(grid: string[][], i: number, j: number) {
    if (
      i < 0 ||
      i > grid.length - 1 ||
      j < 0 ||
      j > grid[0].length - 1 ||
      grid[i][j] === "0"
    )
      return;

    grid[i][j] = "0";

    // 遍历 上下左右 四个格子
    dfs(grid, i - 1, j); // 上
    dfs(grid, i + 1, j); // 下
    dfs(grid, i, j - 1); // 左
    dfs(grid, i, j + 1); // 右
  }
}
// @lc code=end
