let name = "Alice";
const age = 30;
var legacy = "avoid this";



// Declaration — hoisted (can be called before it's defined)
function greet(name) {
  return `Hello, ${name}! ${age} years old. `;
}

console.log(greet(name)); // Works because of hoisting

// Expression — NOT hoisted (must be defined before calling)
//const greet = function(name) {
//  return `Hello, ${name}!`;
//};
