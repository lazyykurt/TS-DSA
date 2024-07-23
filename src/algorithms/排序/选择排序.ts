import assert from 'assert';

function selectionSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

try {
  assert.deepStrictEqual(selectionSort([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
  assert.deepStrictEqual(selectionSort([10, -1, 2, 5, 0, 6]), [-1, 0, 2, 5, 6, 10]);
  assert.deepStrictEqual(selectionSort([1]), [1]);
  assert.deepStrictEqual(selectionSort([]), []);
  assert.deepStrictEqual(selectionSort([5, 3, 8, 4, 2, 3]), [2, 3, 3, 4, 5, 8]);
  assert.deepStrictEqual(selectionSort([2, 2, 2]), [2, 2, 2]);
  console.log("All tests passed!");
} catch (error) {
  if (error instanceof Error) {
    console.error("A test failed:", error.message);
  } else {
    console.error("An unknown error occurred");
  }
}