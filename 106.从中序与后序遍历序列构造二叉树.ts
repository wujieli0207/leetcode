/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  // inLeft: 中序遍历数组头索引，inRightIndex：中序遍历数组尾索引
  // postLeftIndex: 后序遍历数组头索引，postRightIndex：后序遍历数组尾索引
  function build(
    inLeftIndex: number,
    inRightIndex: number,
    postLeftIndex: number,
    postRightIndex: number
  ): TreeNode | null {
    if (postLeftIndex > postRightIndex) return null;

    // 根元素的 val 是后序遍历数组的尾元素
    const rootVal = postorder[postRightIndex];
    // 根元素在中序遍历的数组中的索引
    const rootInIndex = inorder.indexOf(rootVal);
    // 左子树个数 = 根元素在中序遍历的数组中的索引 - 中序遍历的头部索引
    const leftNum = rootInIndex - inLeftIndex;

    // 创建根节点
    const root = new TreeNode(rootVal);

    // 递归生成左右子树
    root.left = build(
      inLeftIndex,
      rootInIndex - 1,
      postLeftIndex,
      postLeftIndex + leftNum - 1
    );
    root.right = build(
      rootInIndex + 1,
      inRightIndex,
      postLeftIndex + leftNum,
      postRightIndex - 1
    );

    return root;
  }

  return build(0, inorder.length - 1, 0, postorder.length - 1);
}
// @lc code=end
