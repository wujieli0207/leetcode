/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const result = [];

  if (!root) return result;

  const queue = [];
  queue.push(root);

  while (queue.length) {
    // 缓存当前层的节点
    const level = [];

    // 注意到 queue 队列的长度可能在遍历过程中发生变化，需要提前缓存长度
    const queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      // 注意先取出头部元素
      const current = queue.shift();

      level.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }

    result.push(level);
  }

  return result;
}
// @lc code=end
