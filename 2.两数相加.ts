/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start

//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(-1);
  let p = dummy; // 用于处理新链表的指针
  let carry = 0; // 存储进位

  while (l1 || l2 || carry) {
    // 首先相加进位
    let val = carry;

    // 链表求和
    if (l1) {
      val += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val += l2.val;
      l2 = l2.next;
    }
    // 处理进位问题
    carry = Math.floor(val / 10);
    val = val % 10;
    // 构建新的链表
    p.next = new ListNode(val);
    p = p.next;
  }

  // 返回链表头节点(去除虚拟头节点)
  return dummy.next;
}
// @lc code=end
