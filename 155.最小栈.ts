/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
  mainStack = []; // 主要存储栈
  decreaseStack = []; // 用于维护栈中的最小元素

  constructor() {}

  push(val: number): void {
    this.mainStack.push(val);

    // 新增元素时，如果新增元素小于等于递减栈顶元素,或者递减栈为空时，就放入递减栈
    if (
      this.decreaseStack.length === 0 ||
      val <= this.decreaseStack[this.decreaseStack.length - 1]
    ) {
      this.decreaseStack.push(val);
    }
  }

  pop(): void {
    // 弹出元素时，如果弹出元素和递减栈顶是一个元素，递减栈顶的元素也要弹出
    if (
      this.mainStack.pop() === this.decreaseStack[this.decreaseStack.length - 1]
    ) {
      this.decreaseStack.pop();
    }
  }

  top(): number {
    return this.mainStack[this.mainStack.length - 1];
  }

  getMin(): number {
    return this.decreaseStack[this.decreaseStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
