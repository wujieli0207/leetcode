/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  if (s.length === 1) return 0;

  const map: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (map.get(item) !== undefined) {
      map.set(item, map.get(item)! + 1);
    } else {
      map.set(item, 1);
    }
  }

  for (const [key, value] of map) {
    if (value === 1) {
      return s.indexOf(key);
    }
  }

  return -1;
}
// @lc code=end
