/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
  // 如果 magazine 长度 小于 ransomNote 长度，肯定无法组成，直接返回 false
  if (ransomNote.length > magazine.length) return false;

  // 如果 ransomNote 的字符串在 magazine 中不存在或者多余 magazine，同样也返回 false

  // ! 使用数组来存储 magazine 中字符出现的次数
  const magStrCount: number[] = new Array(26).fill(0);

  for (const str of magazine) {
    magStrCount[str.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (const str of ransomNote) {
    magStrCount[str.charCodeAt(0) - "a".charCodeAt(0)]--;

    if (magStrCount[str.charCodeAt(0) - "a".charCodeAt(0)] < 0) {
      return false;
    }
  }

  return true;
}
// @lc code=end
