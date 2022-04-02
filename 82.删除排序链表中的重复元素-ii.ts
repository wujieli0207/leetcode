/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // 如果参数是空节点或者只有一个数据，直接返回该链表就好
  if (!head || !head.next) {
    return head;
  }

  // 创建虚拟头节点，next 节点指向原链表
  let dummy = new ListNode();
  dummy.next = head;

  let current = dummy;

  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      // 除外所有重复的数据
      let value = current.next.val;
      while (current.next && current.next.val === value) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}
// @lc code=end
