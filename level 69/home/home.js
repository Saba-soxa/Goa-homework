// N1

function countElements(arr) {
  return arr.length;
}

// N2

function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// N3

function pushValue(arr, value) {
  return arr.push(value);
}

// N4

function popValue(arr) {
  return arr.pop();
}

// N5

function concatenateAndPush(arr1, arr2, value) {
  let newArr = arr1.concat(arr2);
  newArr.push(value);
  return newArr;
}

// N6

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
