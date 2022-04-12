/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  if (!root) return result;

  const stack = [];
  let current = root;

  while (current || stack.length) {
    // 不断循环找到最左边的节点,沿途经过的节点都放入栈中
    while (current) {
      stack.push(current);
      current = current.left;
    }

    // 最左边节点的 val 放入结果数据，此时 current 承担指针的角色
    current = stack.pop();
    result.push(current.val);

    // current 的右子树如果是 null，则结束本轮循环，则下一轮循环中处理的是父节点（即顺序：左-中）
    // current 的右子树如果不是 null，相当于继续寻找右子树的最左节点，如果没有最左节点，就相当处理自己，叙事顺序就是（中-右）
    current = current.right;
  }

  return result;
}
// @lc code=end
