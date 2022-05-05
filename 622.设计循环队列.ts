/*
 * @lc app=leetcode.cn id=622 lang=typescript
 *
 * [622] 设计循环队列
 */

// @lc code=start
class MyCircularQueue {
  private array: Array<number>;
  private head: number; // 头部索引
  private tail: number; // 尾部索引
  private count: number; // 队列中元素个数

  constructor(k: number) {
    this.array = new Array(k);
    this.head = -1;
    this.tail = -1;
    this.count = 0;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    // 初始情况添加，head 和 tail 都需要移动
    if (this.head === -1 && this.tail === -1) {
      this.array[0] = value;
      this.head = 0;
      this.tail = 0;
    }
    // tail 在数组末尾需要移动至头部
    else if (this.tail === this.array.length - 1) {
      this.array[0] = value;
      this.tail = 0;
    } else {
      this.array[this.tail + 1] = value;
      this.tail++;
    }

    this.count++; // 元素个数增加一个

    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    // 注意不用调用 splice 移除元素，直接改变指针就行，使用 splice 会减少数组长度

    // head = tail 说明只有一个元素，移除后 head 和 tail 都放到 -1 位置
    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
    } // head 在数组末尾，移除数据后就放到数组开头
    else if (this.head === this.array.length - 1) {
      this.head = 0;
    } else {
      this.head++;
    }

    this.count--; // 元素个数减少一个

    return true;
  }

  Front(): number {
    return this.head !== -1 ? this.array[this.head] : -1;
  }

  Rear(): number {
    return this.tail !== -1 ? this.array[this.tail] : -1;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.array.length;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end
