/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current) {
    // 定义当前节点的 next 节点，便于继续遍历
    let next = current.next;
    // 当前节点指向前驱节点，前驱、当前节点依次向后移动即可
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
// @lc code=end
