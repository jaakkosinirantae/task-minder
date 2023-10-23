/* 
Filename: SophisticatedCode.js
Content: Implementation of a complex sorting algorithm called Quick Sort
*/

function quickSort(arr, low, high) {
  if (low < high) {
    let partitionIndex = partition(arr, low, high);

    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage
let array = [9, 5, 2, 7, 1, 4, 8, 3, 6];
console.log("Original Array:", array);

quickSort(array, 0, array.length - 1);
console.log("Sorted Array:", array);
