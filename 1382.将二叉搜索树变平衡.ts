/*
 * @lc app=leetcode.cn id=1382 lang=typescript
 *
 * [1382] 将二叉搜索树变平衡
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

function balanceBST(root: TreeNode | null): TreeNode | null {
  // 对树中序遍历生成数组
  function inorderTraversal(root: TreeNode): number[] {
    const result = [];
    if (!root) return result;

    const stack = [];
    let current = root;

    while (current || stack.length) {
      // 不断遍历寻找最左子节点
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      result.push(current.val);

      current = current.right;
    }

    return result;
  }

  // 将有序数组转化为平衡二叉树
  function sortedArrayToBST(sortedArr: number[]): TreeNode | null {
    if (sortedArr.length === 0) return null;

    const root = buildBST(0, sortedArr.length - 1);

    function buildBST(left: number, right: number): TreeNode | null {
      if (left > right) return null;

      const mid = Math.floor(left + (right - left) / 2);

      const root = new TreeNode(sortedArr[mid]);
      root.left = buildBST(left, mid - 1);
      root.right = buildBST(mid + 1, right);

      return root;
    }

    return root;
  }

  const sortedTreeArr = inorderTraversal(root);
  return sortedArrayToBST(sortedTreeArr);
}
// @lc code=end
