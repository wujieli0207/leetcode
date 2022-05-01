/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  const stack = [];
  if (intervals.length === 0) return stack;

  // 对二维数组按照 start 进行升序排序
  intervals.sort((a, b) => a[0] - b[0]);

  // 将第一个元素放入栈中
  stack.push(intervals[0]);

  // 从第二个元素开始循环
  for (let i = 1; i < intervals.length; i++) {
    const item = intervals[i];
    const stackLast = stack[stack.length - 1];

    // 如果区间 start 小于 栈顶元素，说明 start 在前一个区间内
    if (item[0] <= stackLast[1]) {
      // 此时如果 end 大于 栈顶元素，说明 end 是前一个区间的边界，用 end 替换栈顶元素
      if (item[1] > stackLast[1]) {
        stack.pop();
        stack.push([stackLast[0], item[1]]);
      }
    } // 如果区间 start 小于 栈顶元素，说明 start 不在前一个区间内，把 start 和 end 都放入栈
    else {
      stack.push(item);
    }
  }

  return stack;
}
// @lc code=end
