/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  // preLeftIndex: 前序遍历头部索引， preRightIndex: 前序遍历尾部索引
  // inLeftIndex: 中序遍历头部索引， inRightIndex: 中序遍历尾部索引
  function build(
    preLeftIndex: number,
    preRightIndex: number,
    inLeftIndex: number,
    inRightIndex: number
  ): TreeNode | null {
    // 设置递归边界
    if (preLeftIndex > preRightIndex) return null;

    // 根节点的值就是先序遍历数组的头部的值
    const rootVal = preorder[preLeftIndex];
    // 获取根节点 value 在中序遍历数组中的索引位置
    const inRootIndex = inorder.indexOf(rootVal);

    // 【重点】左子树个数 = 根节点在中序序列中的索引 - 中序遍历头部索引
    const leftTreeNum = inRootIndex - inLeftIndex;

    // 根据前序遍历头部索引值创建跟节点
    const root = new TreeNode(rootVal);

    // 递归计算左右子树
    root.left = build(
      preLeftIndex + 1,
      preLeftIndex + leftTreeNum,
      inLeftIndex,
      inRootIndex - 1
    );
    root.right = build(
      preLeftIndex + leftTreeNum + 1,
      preRightIndex,
      inRootIndex + 1,
      inRightIndex
    );

    return root;
  }

  // 创建根节点
  const root = build(0, preorder.length - 1, 0, inorder.length - 1);
  return root;
}
// @lc code=end
