/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  // 定义左右指针
  let left = 0;
  let right = s.length - 1;

  // 左右指针指向字符相同可以跳过判断
  while (left < right && s[left] === s[right]) {
    left++;
    right--;
  }

  // 左右指针指向不相等的情况下，可以删掉一个指针指向的元素判断剩余区间是否是回文
  // 删掉右指针，即判断 [left, right - 1] 区间是否是回文
  if (isPalindrome(left, right - 1)) {
    return true;
  }

  // 删掉左指针，即判断 [left + , right] 区间是否是回文
  if (isPalindrome(left + 1, right)) {
    return true;
  }

  // 以上两种不是回文字符的情况返回 false
  return false;

  function isPalindrome(left: number, right: number) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
}
// @lc code=end
