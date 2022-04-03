/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  // 使用 map 保存每一个遍历过的节点
  let map = new Map();

  let current = head;

  while (current && current.next) {
    if (map.has(current.next)) {
      return true;
    }

    map.set(current, current.val);
    current = current.next;
  }

  return false;
}
// @lc code=end
