let count_swaps = 0;
function Sort() {
  let input_array = document.getElementById("input_array").value;
  input_array = input_array.split(",").map((val) => +val.trim());
  let sort_option = document.getElementById("sort_option").value;
  if (sort_option == "heapsort") {
    heapify(input_array);
  } else if (sort_option == "quicksort") {
    quicksort(input_array, 0, input_array.length - 1);
    console.log(input_array);
  }
}
function quicksort(arr, p, r) {
  if (p < r) {
    q = partition(arr, p, r);
    quicksort(arr, p, q - 1);
    quicksort(arr, q + 1, r);
  }
}

function partition(arr, p, r) {
  let elem = arr[r],
    j = p - 1;
  for (let i = p; i <= r - 1; i++) {
    if (arr[i] <= elem) {
      j += 1;

      [arr[j], arr[i]] = [arr[i], arr[j]];
      console.log(arr);
    }
  }

  [arr[r], arr[j + 1]] = [arr[j + 1], arr[r]];
  return j + 1;
}

function heapify(arr) {
  for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
    max_heap(arr, i);
  }
  const heapified_array_element = document.getElementById("heapified_array");
  const sorted_array = [];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   sorted_array.push(arr[0]);
  //   arr[0] = arr[i];
  //   arr.length -= 1;
  //   max_heap(arr, 0);
  // }
  console.log(sorted_array);
  console.log(arr);
  console.log(count_swaps);
  document.getElementById("sorted_array").innerText =
    "Sorted Array: " + sorted_array.toString();
}

function max_heap(arr, i) {
  // if (i >= arr.length) {
  //   return;
  // }
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  let maxi = i;

  if (l < arr.length && arr[i] < arr[l]) {
    maxi = l;
  }

  if (r < arr.length && arr[maxi] < arr[r]) {
    maxi = r;
  }

  if (maxi != i) {
    count_swaps += 1;
    let temp = arr[i];
    arr[i] = arr[maxi];
    arr[maxi] = temp;
    // pushing down smallest element to the bottom
    max_heap(arr, maxi);
  }
}
