// Upward triangle
function upwardTriangle(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += " ".repeat(n - i);
    output += "*".repeat(i);
    output += "\n";
  }
  console.log(output);
}

// Downward triangle
function downwardTriangle(n) {
  let output = "";
  for (let i = n; i >= 1; i--) {
    output += "*".repeat(i) + "\n";
  }
  console.log(output);
}

// Pyramid with spaces between stars
function pyramid(n) {
  let output = "";
  for (let row = 1; row <= n; row++) {
    output += " ".repeat(n - row);
    for (let star = 1; star <= row; star++) {
      output += "*";
      if (star < row) output += " ";
    }
    output += "\n";
  }
  console.log(output);
}

// Right-angled star triangle (with input)
function rightAngleStars() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question("Enter n for right-angled triangle: ", (input) => {
    const n = parseInt(input);
    for (let i = 1; i <= n; i++) {
      let line = " ".repeat(n - i);
      for (let k = 1; k <= i; k++) {
        line += "*";
        if (k < i) line += " ";
      }
      console.log(line);
    }
    readline.close();
  });
}

// Diamond pattern (multiple test cases)
function diamondPattern() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputLines = [];
  readline.on("line", (line) => inputLines.push(line));
  readline.on("close", () => {
    const t = parseInt(inputLines[0]);
    let lineIndex = 1;

    for (let test = 0; test < t; test++) {
      const N = parseInt(inputLines[lineIndex++]);
      const mid = Math.floor(N / 2) + 1;

      // Upper half
      for (let row = 1; row <= mid; row++) {
        let line = " ".repeat(mid - row);
        for (let star = 1; star <= row; star++) {
          line += "*";
          if (star < row) line += " ";
        }
        console.log(line);
      }

      // Lower half
      for (let row = mid - 1; row >= 1; row--) {
        let line = " ".repeat(mid - row);
        for (let star = 1; star <= row; star++) {
          line += "*";
          if (star < row) line += " ";
        }
        console.log(line);
      }
    }
  });
}

// Call the patterns
upwardTriangle(5);
downwardTriangle(5);
pyramid(5);
