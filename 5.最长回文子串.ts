/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  // 动态规划思路：一个回文字符串，去掉两边的字符串，中间仍然是回文字符串
  // 状态转移方程：dp[i][j] = (s[i] === s[j]) && dp[i+1][j-1] (左右字符串相等，并且内部仍然是回文字符串)
  // 边界条件：(j - 1) - (i + 1) + 1 < 2 时停止，等价于：j - i < 3

  // 定义字串的开始索引，做大长度
  let begin = 0;
  let maxLen = 1;

  // 定义二维数组，表示 dp[i][j] 是否是回文（是回文就是 true）
  const dp = [];

  // 二维数组的对角线位置的都是回文（自己），填充为 true
  for (let i = 0; i < s.length; i++) {
    dp[i] = []; // 初始化二维数组
    dp[i][i] = true;
  }

  // 从列至行进行填充（因为 [i+1][j-1] 依赖左下角的计算结果），第一列不用填充（因为第一列 [0][0] 就是 true）
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      // 左右不相等直接为 false
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        // 如果在边界条件内，就是 true，否则进行状态转移计算
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      // dp[i][j] 为 true 表示回文成立，记录此时的回文长度是初始值
      if (dp[i][j] === true && j - i + 1 > maxLen) {
        begin = i;
        maxLen = j - i + 1;
      }
    }
  }

  return s.substring(begin, begin + maxLen);
}
// @lc code=end
