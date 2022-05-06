/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
function openLock(deadends: string[], target: string): number {
  // 整体思路：采用广度优先搜索判断

  // 使用 Set 存储 dead，用于判断当前值是否和 dead 重复
  const deadSet = new Set(deadends);

  // 处理两个初始临界值
  // 1. target 为 0，直接返回 0
  // 2. deadends 中如果存在 “0000”，直接返回 -1
  if (target === "0000") return 0;

  if (deadSet.has("0000")) return -1;

  // 记录翻转次数
  let count = 0;
  // 记录广度优先搜索过程队列
  const queue = [];
  // 记录是否被处理过的密码，处理过的密码都放到这个 Set 中
  const seen = new Set();

  // 从 0000 开始处理
  queue.push("0000");
  seen.add("0000");

  while (queue.length) {
    // 每一次循环就代表翻转了一次
    count++;

    // 缓存当前队列的长度，后续长度可能发生变化
    const queueLen = queue.length;

    for (let i = 0; i < queueLen; i++) {
      // 取出队列头部元素
      const status = queue.shift();

      // 对当前头部元素可能产生的翻转情况进行枚举，判断是否符合要求还是应该放入 queue 和 seen 中继续处理
      for (const nextStatus of get(status)) {
        // 注意：是 交集条件，dead 和已处理过的集合都不能存在
        if (!deadSet.has(nextStatus) && !seen.has(nextStatus)) {
          if (nextStatus === target) {
            return count;
          }
          // 不符合要求就放入 queue 和 seen 中
          queue.push(nextStatus);
          seen.add(nextStatus);
        }
      }
    }
  }

  // 如果不符合要求默认返回 -1
  return -1;

  // 获取当前数字前一个数字
  function numPrev(str: string): string {
    return str === "0" ? "9" : (parseInt(str) - 1).toString();
  }

  // 获取当前数字后一个数字
  function numNext(str: string): string {
    return str === "9" ? "0" : (parseInt(str) + 1).toString();
  }

  // 获取当前 4 位密码进行翻转一位后可能产生的所有情况，返回一个数组
  function get(status: string): Array<string> {
    const result: Array<string> = [];

    const statusArr = Array.from(status);

    for (let i = 0; i < statusArr.length; i++) {
      const str = statusArr[i];
      statusArr[i] = numPrev(str);
      result.push(statusArr.join("")); // 存储向前翻转一位的情况
      statusArr[i] = numNext(str);
      result.push(statusArr.join("")); // 存储向后翻转一位的情况
      statusArr[i] = str;
      // 不翻转的情况的情况没有必要存储
    }

    return result;
  }
}
// @lc code=end
