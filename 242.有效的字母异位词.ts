/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  return (
    s.length === t.length &&
    s.split("").sort().join("") === t.split("").sort().join("")
  );
}
// @lc code=end
