const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let t = Number(input.shift());

  while (t-- > 0) {
    let n = Number(input.shift());

    let matrix1 = [];
    let matrix2 = [];

    for (let i = 0; i < n; i++) {
      matrix1.push(input.shift().trim().split(' ').map(Number));
    }
    for (let i = 0; i < n; i++) {
      matrix2.push(input.shift().trim().split(' ').map(Number));
    }

    const result = printMultiplication(matrix1, matrix2, n);

    // 🔥 PRINT THE RESULT (this was missing)
    for (let i = 0; i < n; i++) {
      console.log(result[i].join(" "));
    }
  }
});

function printMultiplication(matrix1, matrix2, n) {

  const result = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}
