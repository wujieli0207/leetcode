/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
  // 核心方案：进入元素的时候，直接入栈，出元素的时候，将主栈元素移动到第二个栈，从第二个栈出元素
  mainStack = [];
  viceStack = [];

  constructor() {}

  push(x: number): void {
    this.mainStack.push(x);
  }

  pop(): number {
    // 如果第二个栈为空的话，就把主栈的数据逆序放入第二个栈
    if (this.viceStack.length === 0) {
      while (this.mainStack.length !== 0) {
        this.viceStack.push(this.mainStack.pop());
      }
    }

    return this.viceStack.pop();
  }

  peek(): number {
    // 如果第二个栈为空的话，就把主栈的数据逆序放入第二个栈
    if (this.viceStack.length === 0) {
      while (this.mainStack.length !== 0) {
        this.viceStack.push(this.mainStack.pop());
      }
    }

    return this.viceStack[this.viceStack.length - 1];
  }

  empty(): boolean {
    return this.mainStack.length === 0 && this.viceStack.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
