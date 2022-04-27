/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
  let max = 0; // 定义最大深度

  // 整体思路：当前叶子结点的的深度与最大深度比较，取较大值更新最大深度，然后递归每个节点求解
  function calDepth(root: TreeNode | null, depth: number) {
    if (!root) return;

    // 取叶子结点深度和最大深度的较大值
    if (!root.left && !root.right) {
      max = Math.max(max, depth);
    }

    // 递归求解
    calDepth(root.left, depth + 1);
    calDepth(root.right, depth + 1);
  }

  calDepth(root, 1);

  return max;
}
// @lc code=end
