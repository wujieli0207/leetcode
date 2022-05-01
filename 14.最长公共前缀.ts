/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";

  let sameStr = "";

  // 如果公共前缀存在，肯定是在数组的第一个字符串内
  for (let i = 0; i < strs[0].length; i++) {
    // 对数组第一个字符串遍历，通过 every 方法对比相同位置的字符是否相等
    if (strs.every((str) => strs[0][i] === str[i])) {
      sameStr += strs[0][i];
    }
    // 如果存在不想等的情况直接停止遍历，避免后续又出现字符相等的情况
    else {
      break;
    }
  }

  return sameStr;
}
// @lc code=end
