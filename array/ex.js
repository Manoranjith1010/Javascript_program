// var is hoisted and initialized as undefined.
console.log(d);
var d = 10;

function create2DArray(rows, cols, fillValue = 0) {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = []; // Create an empty inner array (row)
        for (let j = 0; j < cols; j++) {
            arr[i][j] = fillValue; // Fill the columns
        }
    }
    return arr;
}
const dynamicMatrix = create2DArray(3, 4, 1); // Creates a 3x4 matrix filled with 0s
console.log(dynamicMatrix);