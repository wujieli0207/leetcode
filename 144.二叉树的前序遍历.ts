/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  // 处理边界条件，如果为空，直接返回
  if (!root) return result;

  // 定义栈并将根节点放入栈
  const stack = [];
  stack.push(root);

  // 如果栈不为空的话，就将栈顶 val 放入结果，在一次将栈顶右子树、左子树放入栈中，循环处理
  // 注：前序遍历顺序是：根-左-右，所以放入栈中的顺序应该是：右-左-根
  while (stack.length !== 0) {
    const current = stack.pop();

    result.push(current.val);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}
// @lc code=end
