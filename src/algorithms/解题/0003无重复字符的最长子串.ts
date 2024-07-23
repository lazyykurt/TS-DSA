function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;

  let result = 0;
  let map = new Map();
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      result = Math.max(result, i - left);
      left = Math.max(left, map.get(s[i]) + 1);
    }
    map.set(s[i], i);
  };

  return Math.max(result, s.length - left);
}

console.log(lengthOfLongestSubstring("abcdeaf"));

/*
判断最大值的逻辑容易搞混

当中间有相同的字符时：
末尾多了一个重复值，此时字符串的长度为 right - left + 1，但是我们得去除掉这个重复值，right - left + 1 - 1；

当结束时：
我们得此时字符串长度为 right - left + 1，我们就是要这个长度，判断这个长度是否时新的最大值。
*/
