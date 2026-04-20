// 1. Login System (Frontend Logic)
// What it uses: function declaration, arrow function, async function, callback
function validateUser(username, password) {
  return username === "admin" && password === "1234";
}

const showMessage = (msg) => {
  console.log(msg);
};

async function login(username, password, callback) {
  if (validateUser(username, password)) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate API latency
    callback("Login successful");
  } else {
    callback("Invalid credentials");
  }
}

login("admin", "1234", showMessage);

// 2. Fetch Data from API (Weather / Products)
// What it uses: async function, arrow function, higher-order function
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const processData = (data, callback) => {
  return data.map(callback);
};

// Example usage (uncomment in browser environment):
// fetchData("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     const names = processData(data, (user) => user.name);
//     console.log(names);
//   });

// 3. Shopping Cart System
// What it uses: constructor / class-style, method, callback
function Cart() {
  this.items = [];

  this.addItem = function (item, callback) {
    this.items.push(item);
    callback(this.items);
  };
}

const cart = new Cart();
cart.addItem({ name: "Shoes", price: 50 }, function (items) {
  console.log("Cart updated:", items);
});

// 4. Recursive File Search (like folder structure)
// What it uses: recursive function
function findFile(files, target) {
  for (let file of files) {
    if (file.name === target) return file;
    if (file.children) {
      const result = findFile(file.children, target);
      if (result) return result;
    }
  }
  return null;
}

const fileTree = [
  { name: "index.js" },
  {
    name: "src",
    children: [
      { name: "app.js" },
      { name: "utils.js" },
    ],
  },
];

console.log(findFile(fileTree, "utils.js"));

// 5. Auto ID Generator (Generator Function)
// What it uses: generator
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// 6. Event Handling System
// What it uses: anonymous function, callback
// Useful in browser UI code. Example below is commented for Node.
// document.getElementById("btn").addEventListener("click", function () {
//   console.log("Button clicked");
// });

// 7. Custom Utility (Higher-Order Function)
// What it uses: higher-order function, arrow function
function filterArray(arr, condition) {
  return arr.filter(condition);
}

const result = filterArray([1, 2, 3, 4], (n) => n > 2);
console.log(result);

// Reality: choose functions by need, not by name.
// "I need async data → use async function"
// "I need short logic → arrow function"
// "I need reusable logic → normal function"
