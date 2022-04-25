/*
 * @lc app=leetcode.cn id=1038 lang=typescript
 *
 * [1038] 从二叉搜索树到更大和树
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

function bstToGst(root: TreeNode | null): TreeNode | null {
  let max = 0; // 记录从最右子树开始的最大值

  // 整体思路：递归遍历到最右子树，求出右侧的最大值
  function calculateMax(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    // 递归找到最右子树
    if (root.right) {
      calculateMax(root.right);
    }

    // 最大值加上最右子树的值
    max += root.val;

    // 当前节点等于最大值
    root.val = max;

    // 递归处理左子树
    if (root.left) {
      calculateMax(root.left);
    }

    return root;
  }

  return calculateMax(root);
}
// @lc code=end
