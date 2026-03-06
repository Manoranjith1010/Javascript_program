// d is hoisted but uninitialized (TDZ)
console.log(d)   // ❌ Error: cannot access before initialization
let d = 10;      // initialization happens here


var d;        // hoisted
console.log(d);  // d exists but is undefined
d = 10;       // assignment happens here
