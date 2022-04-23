/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  // 定义 flag，如果高度差大于 1 的话 flag 就为 false
  let flag = true;

  // 深度优先遍历树的高度
  function dfsTreeHeight(root: TreeNode | null): number {
    if (!root || !flag) return 0;

    // 计算左右子树的高度
    const left = dfsTreeHeight(root.left);
    const right = dfsTreeHeight(root.right);

    if (Math.abs(left - right) > 1) {
      flag = false;

      // flag 已经确定为 false 的情况下，就不用再继续计算了，返回一个不影响高度的值
      return 0;
    }

    // 返回当前子树的高度
    return Math.max(left, right) + 1;
  }

  dfsTreeHeight(root);
  return flag;
}
// @lc code=end
