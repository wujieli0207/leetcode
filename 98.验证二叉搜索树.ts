/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  function dfs(
    root: TreeNode | null,
    minValue: number,
    maxValue: number
  ): boolean {
    if (!root) return true;

    if (root.val <= minValue || root.val >= maxValue) return false;

    // 如果遍历左子树，左子树的最大值应该小于当前 root 的值；如果遍历右子树，右子树的最小值应该大于当前 root 的值
    return (
      dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
    );
  }

  // 通过预设极大、极小值，在遍历左子树的时候，总是判断左子树的最大值；遍历右子树的时候，总是判断右子树的最小值
  return dfs(root, -Infinity, Infinity);
}
// @lc code=end
