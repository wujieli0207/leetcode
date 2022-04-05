/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const result = [];
  const current = []; // 某一种排列结果
  const visited = new Map(); // 记录当前数据是否被访问

  const len = nums.length;

  // nth: 遍历的层级
  function dfs(nth: number) {
    // 递归结束条件
    if (nth === len) {
      result.push(current.slice()); // 使用 slice 方法构建一个新的数组，避免产生引用问题
      return;
    }

    for (let i = 0; i < len; i++) {
      // 遍历时排除已经访问过的节点
      if (!visited.has(nums[i])) {
        // 把当前遍历到的节点加入 visited，避免再次访问
        visited.set(nums[i], i);
        // 当前遍历到的节点加入全排列结果
        current.push(nums[i]);

        // 递归遍历后续层次
        dfs(nth + 1);

        // 递归遍历完成后从全排列结果取出
        current.pop();
        // 递归遍历完成后从 visited 移出
        visited.delete(nums[i]);
      }
    }
  }

  dfs(0); // 从虚拟 root 节点也是遍历

  return result;
}
// @lc code=end
