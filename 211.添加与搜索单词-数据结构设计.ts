/*
 * @lc app=leetcode.cn id=211 lang=typescript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
class WordDictionary {
  // 以 map 存储数据，字符串长度作为 key，相同长度的字符串以数组形式存储
  map = new Map<number, string[]>();

  constructor() {}

  addWord(word: string): void {
    // 新增字符串时如果长度已存在，就放到该长度下的数组中，否则就新建一个数组传进去
    if (this.map.has(word.length)) {
      this.map.get(word.length).push(word);
    } else {
      this.map.set(word.length, [word]);
    }
  }

  search(word: string): boolean {
    if (!this.map.get(word.length)) return false;

    if (!word.includes(".")) {
      return this.map.get(word.length).includes(word);
    }

    let reg = new RegExp(word);

    return this.map.get(word.length).some((value) => {
      return reg.test(value);
    });
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
