/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  let result = [];

  let deque = []; // 定义双端队列

  nums.forEach((value, index) => {
    // 如果当前元素的大于双端队列队尾的元素，就取出队尾元素，维护队列的递减性
    while (deque.length !== 0 && value > nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    // 放入索引
    deque.push(index);

    // 注意：判断双端队列队头元素是不是在滑动窗口的范围内，如果不在范围内需要剔除
    while (deque.length !== 0 && deque[0] <= index - k) {
      deque.shift();
    }

    // 如果当前遍历元素个数 = k的话，此时双端队列队头就是最大值（第一次向结果数组放入数据）,此后每一次都需要将向结果队列中放入最大值
    if (index >= k - 1) {
      result.push(nums[deque[0]]);
    }
  });

  return result;
}
// @lc code=end
