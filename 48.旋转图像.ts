/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  // 顺时针翻转 90 度的实现方式
  // 第一步：将左下、右上按照对角线进行翻转（互换）
  // 第二部：按照垂直中间线，左右进行翻转（互换）

  const len = matrix.length;

  // 对角线翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]];
    }
  }

  // 按照中心线翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0, k = len - 1; j < k; j++, k--) {
      [matrix[i][k], matrix[i][j]] = [matrix[i][j], matrix[i][k]];
    }
  }
}
// @lc code=end
