/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (!s) return false;

  const leftToRight = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    if (element === "(" || element === "{" || element === "[") {
      stack.push(leftToRight.get(element));
    } else {
      if (stack.pop() !== element) {
        return false;
      }
    }
  }

  // 如果栈为空说明才匹配完成
  return stack.length === 0;
}
// @lc code=end
