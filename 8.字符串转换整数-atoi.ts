/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);

  let reg = /\s*([+|-]?\d*).*/;

  let matchNum = Number(s.match(reg)[1]);
  let result = isNaN(matchNum) ? 0 : matchNum;

  if (result > MAX) {
    return MAX;
  } else if (result < MIN) {
    return MIN;
  } else {
    return result;
  }
}
// @lc code=end
