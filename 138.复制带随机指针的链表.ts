/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  // 整体思路：先遍历一遍顺序链表，再处理 random 指向

  // 处理边界条件
  if (!head) return null;

  let copyHead = new Node();

  let copyNode = copyHead; // 拷贝链表头节点
  let current = head; // 原链表头节点
  let map = new Map(); // 存储原链表和拷贝链表的对应关系

  // 遍历处理顺序链表
  while (current) {
    copyNode.val = current.val;
    // 【注意】copyNode 的 next 不能直接指向 current 的 next（不然链表就混乱了），而是应该指向一个空 Node
    copyNode.next = current.next ? new Node() : null;
    map.set(current, copyNode); // 存储原节点和拷贝节点的对应关系
    current = current.next;
    copyNode = copyNode.next;
  }

  // 遍历处理 random 指向
  copyNode = copyHead;
  current = head;

  while (current) {
    // 如果 current 的 random 存在，copyNode 的 random 应该指向 current 对应 random 的节点
    copyNode.random = current.random ? map.get(current.random) : null;
    current = current.next;
    copyNode = copyNode.next;
  }

  return copyHead;
}
// @lc code=end
