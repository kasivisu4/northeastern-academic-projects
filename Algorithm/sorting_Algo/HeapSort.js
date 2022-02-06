function Sort() {
  let input_array = document.getElementById("input_array").value;
  input_array = input_array.split(",");
  create_tree(input_array);
}

function create_tree(input_array) {
  console.log(input_array);
  max_heap(input_array, 0);
  console.log(input_array);
}

function get_index(index, node) {
  if (node == "parent") {
    return Math.floor(index / 2);
  } else if (node == "left") {
    return 2 * index + 1;
  } else if (node == "right") {
    return 2 * index + 2;
  }
}

function max_heap(input_array, i) {
  if (i > input_array.length) {
    return;
  }
  let l = get_index(i, "left");
  let r = get_index(i, "right");
  let max;

  if (
    l <= input_array.length &&
    parseInt(input_array[i]) < parseInt(input_array[l])
  ) {
    max = l;
  } else {
    max = i;
  }

  if (
    r <= parseInt(input_array.length) &&
    parseInt(input_array[max]) < parseInt(input_array[r])
  ) {
    max = r;
  }
  if (max != i) {
    let temp = input_array[i];
    input_array[i] = input_array[max];
    input_array[max] = temp;
    max_heap(input_array, max);
  }
}
