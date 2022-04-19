/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;

  if (root.val === key) {
    // 如果要删除的节点不存在左右子树，直接删除该节点即可
    if (!root.left && !root.right) {
      root = null;
    } // 如果左子树存在，就用左子树的最大值覆盖要删除的节点（此时包括右子树存在、不存在两种情况）
    // 剩下一种情况 else 是只有右子树存在的情况，直接用右子树最小值覆盖要删除的节点即可
    else if (root.left) {
      // 通过 maxLeft 找到左子树最大值
      let maxLeft = root.left;
      while (maxLeft.right) {
        maxLeft = maxLeft.right;
      }

      root.val = maxLeft.val;
      root.left = deleteNode(root.left, maxLeft.val);
    } else {
      // 通过 minRight 找到右子树最小值
      let minRight = root.right;
      while (minRight.left) {
        minRight = minRight.left;
      }

      root.val = minRight.val;
      root.right = deleteNode(root.right, minRight.val);
    }
  } // 注意：如果当前节点小于要删除的值，要向右找
  else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    root.left = deleteNode(root.left, key);
  }

  return root;
}
// @lc code=end
