/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  // 结果数组默认填充 0，当没有修改内容时，说明没有天气大于当前索引
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    let element = temperatures[i];

    // 当前元素只要大于栈顶元素，就取出栈顶元素并将差值更新至结果数组，目的是维持递减栈
    while (stack.length && element > temperatures[stack[stack.length - 1]]) {
      const top = stack.pop();
      result[top] = i - top;
    }
    stack.push(i);
  }

  return result;
}
// @lc code=end
