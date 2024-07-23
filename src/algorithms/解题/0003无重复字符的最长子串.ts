function lengthOfLongestSubstring(s: string): number {
  let result = 0;
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    if(!set.has(s[i])) {
      set.add(s[i])
    } else {
      result = Math.max(result, set.size);
      set = new Set();
      set.add(s[i])
    }
  }
  return Math.max(result, set.size);
}

console.log(lengthOfLongestSubstring("na73menameabbcy"))
