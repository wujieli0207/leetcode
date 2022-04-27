/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  // 整体思路：每遍历到一个结点，就拿 targetSum - 当前节点的 value，最后到叶子节点如果等于 targetSum 剩下的值的话，说明结果成立
  if (!root) return false;

  // 如果是叶子结点，比较当前叶子节点的 value 是否等于 targetSum
  if (!root.left && !root.right && root.val === targetSum) {
    return true;
  }

  // 如果不是叶子节点，应该继续递归下去
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
// @lc code=end
