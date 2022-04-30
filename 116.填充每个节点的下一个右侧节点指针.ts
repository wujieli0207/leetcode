/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (!root) return null;

  function dfs(left: Node | null, right: Node | null) {
    // 递归边界：如果左右节点都不存在则 return
    if (!left && !right) return null;

    left.next = right;

    // 分三种情况的递归处理：
    // 1. 左子树的左孩子 -> 右孩子
    // 2. 左子树的右孩子 -> 右子树的左孩子
    // 3. 右子树的左孩子 -> 右子树的右孩子
    dfs(left.left, left.right);
    dfs(left.right, right.left);
    dfs(right.left, right.right);
  }

  dfs(root.left, root.right);

  return root;
}
// @lc code=end
