function bubbleSort(arr: number[]): number[] {

  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换元素
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }
    // 如果没有发生交换，则数组已经有序
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([1, 3, 2, 6, 0]));

// 通过设置 swapped，可确保提前终止代码运行。