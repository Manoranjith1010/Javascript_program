console.log("Matrix Multiplication already correct")

function DiagonalSumPrimaryDiagonal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  return sum;
}

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(DiagonalSumPrimaryDiagonal(arr1)); // 15


console.log("Count Even Numbers")
function CountEvenNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 === 0) {
        count++;
      }
    }
  }
  return count;
}

console.log(CountEvenNumbers(arr1)); // 4


console.log("ranspose")
let arr2 = [[1, 2, 3], [4, 5, 6]];

function transpose(matrix) {
  let result = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }
    result.push(newRow);
  }
  return result;
}

console.log(transpose(arr2)); // [ [1, 4], [2, 5], [3, 6] ]

console.log("Reverse Each Row")
function ReverseEachRow(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].reverse(); // built-in reverse
  }
  return arr;
}

console.log(ReverseEachRow(arr1));