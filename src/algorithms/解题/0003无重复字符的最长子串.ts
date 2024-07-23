function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  let map = new Map();
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      result = Math.max(result, i - left);
      map.set(s[i], i);
    } else {
      result = Math.max(result, i - left);
      left = map.get(s[i]) + 1;
      map.set(s[i], i);
    }
  }
  return result;
}

console.log(lengthOfLongestSubstring("pwwkew"));

/*

思路逻辑：
之前的缺陷： eabdcazxw，碰到重复a，直接舍去了第二个a前面的所以字符，得到azxw，❌

我们应该舍去第一个a， 前面的字符 ea

如何知道第一个a的位置，我们存入 map 中。map.set(s[i], i), key 为该字符，value为该字符的索引

引入 left 从而得到最大值
当遇到一样的字符，得到left的值，为当前重复字符的next索引eabdcazxw，left -> b， map(s[i])+1

因为left移动最大值会减小，在此之前，我们得更新判断一下最大值

返回时再判断一次最后的最大值。
*/
