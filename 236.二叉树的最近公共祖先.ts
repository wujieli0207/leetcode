/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;

  // 如果根和其中一个结点相等，说明公共祖先就是根
  if (root === p || root === q) {
    return root;
  }

  // 如果不是以上两种情况，就向下移动一层
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 如果 left 为空了，说明公共祖先应该在 right 上，直接返回 right
  if (!left) return right;

  // 同上
  if (!right) return left;

  // 如果两个都不为空的话，说明公共祖先应该在 root 上，直接返回 root
  return root;
}
// @lc code=end
