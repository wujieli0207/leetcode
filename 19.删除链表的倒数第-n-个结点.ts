/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 定义虚拟前驱节点
  let dummy = new ListNode();
  dummy.next = head;

  // 定义快慢指针
  let slow = dummy;
  let fast = dummy;

  let count = 0;

  // 快指针遍历整个链表，慢指针从 (链表长度 len -n) 的时候开始移动，这样快指针遍历完之后，慢指针指向(链表长度 len - n) 的位置，恰好在要删除的元素（len - n + 1）之前
  while (fast.next) {
    if (count >= n) {
      slow = slow.next;
    }
    fast = fast.next;
    count++;
  }

  // 删除移动
  slow.next = slow.next.next;

  return dummy.next;
}
// @lc code=end
