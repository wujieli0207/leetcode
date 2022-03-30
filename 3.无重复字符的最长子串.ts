/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let left = 0; // 定义左指针
  let map = new Map(); // 存储字符及字符所处位置
  let long = 0; // 定义最长子串的长度

  for (let right = 0; right < s.length; right++) {
    const str = s[right];
    // 如果存在重复的字符，并且重复字符的位置在左指针的右侧，就把左指针移动到第一个重复字符的右侧
    if (map.has(str) && map.get(str) >= left) {
      left = map.get(str) + 1;
    }
    // 最长子串长度为：滑动窗口长度（右指针长度 - 左指针长度 + 1）与自己本身长度的最大值
    long = Math.max(long, right - left + 1);
    // 无论是否重复，每次遍历都更新字符出现的位置
    map.set(str, right);
  }

  return long;
}
// @lc code=end
