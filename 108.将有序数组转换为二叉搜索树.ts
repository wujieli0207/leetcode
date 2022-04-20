/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;

  const root = builtBST(0, nums.length - 1);

  // left 和 right 是数组的左右边界
  function builtBST(left: number, right: number): TreeNode | null {
    // 递归边界，当 left > right 的时候，说明当前范围的数字已经被递归处理完成
    if (left > right) return null;

    // 当前递归范围数组的中间项
    const mid = Math.floor(left + (right - left) / 2);

    // 以中间项构建节点
    const current = new TreeNode(nums[mid]);

    // 递归生成左、右子树
    current.left = builtBST(left, mid - 1);
    current.right = builtBST(mid + 1, right);

    return current;
  }

  return root;
}
// @lc code=end
