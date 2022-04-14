/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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

function invertTree(root: TreeNode | null): TreeNode | null {
  // 定义递归边界
  if (!root) return root;

  const currentLeft = root.left;

  // 递归交换左节点
  root.left = root.right;
  invertTree(root.left);

  // 递归交换右节点
  root.right = currentLeft;
  invertTree(root.right);

  return root;
}
// @lc code=end
