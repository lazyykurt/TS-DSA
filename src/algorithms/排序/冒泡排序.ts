function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 2, 6, 0]));

// 外层为排序的总轮数，进行 arr.length - 1 次，每次将最大数放到最前面。
// 内层为，交换的次数，进行 arr.length - 1 - i 次交换。 