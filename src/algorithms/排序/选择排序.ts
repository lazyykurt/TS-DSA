// 找到当前最小元素，加入到最前面

function selectionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      arr[j] < arr[j + 1] ? (minIndex = j) : (minIndex = j + 1);
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log(selectionSort([3, 2, 5, 2, 0]));

// 错误了，
// 1. minIndex 应该设置为i
// 2. 内部查询最小值，应该从i+1开始，不是0
// 3. 不是前后比较得到最小index，是当前位置 i+1，和当前最小值 minIndex。