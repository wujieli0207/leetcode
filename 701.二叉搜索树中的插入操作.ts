/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  // 处理当前节点为空时直接插入, 然后 return 即可
  if (!root) {
    root = new TreeNode(val);
    return root;
  }

  // 当前节点小于新节点，就像有搜索递归；大于新节点就向左搜索递归
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }

  return root;
}
// @lc code=end
