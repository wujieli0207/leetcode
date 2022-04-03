/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let dummy = new ListNode()
    dummy.next = head

    let current = dummy;
    let prev = null;

    let n = right - left; // 需要反转的链表次数（应该是反转节点数 - 1）


    while (left !== 0) {
        prev = current;
        current = current.next
        left--;
    }

    let start = prev; // 记录左侧未反转链表的第一个节点
    prev = current
    current = current.next

    while(n!==0){
        let next = current.next;
        current.next = prev
        prev = current
        current = next
        n--
    }

    // 反转后的最后一个节点（即 反转前的第一个节点）指向 current
    start.next.next = current
    // 右侧未反转的第一个节点指向左侧未反转第一个节点
    start.next = prev;

    return dummy.next;
};
// @lc code=end

