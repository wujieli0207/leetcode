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
  // // 使用 map 保存每一个遍历过的节点
  // let map = new Map();

  // let current = head;

  // while (current && current.next) {
  //   if (map.has(current.next)) {
  //     return true;
  //   }

  //   map.set(current, current.val);
  //   current = current.next;
  // }

  // return false;

  if (!head || !head.next) return false;

  let slow = head; // 定义慢指针，一次移动一步
  let fast = head.next; // 定义快指针，一次移动两步

  while (fast !== slow) {
    // 如果快指针及其 next 指向为空，说明不是环形链表
    if (!fast || !fast.next) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}
// @lc code=end
