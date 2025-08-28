/* ========================
   Part 1: Variables & Conditionals
   ======================== */
let userName = "Alice";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

/* ========================
   Part 2: Custom Functions
   ======================== */
// Function 1: Greet user
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function 2: Calculate square of a number
function square(num) {
  return num * num;
}

console.log(greetUser(userName)); // Hello, Alice!
console.log("Square of 5:", square(5)); // 25

/* ========================
   Part 3: Loops
   ======================== */
// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop iteration:", i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

/* ========================
   Part 4: DOM Interactions
   ======================== */
// 1. Change text content of an element
document.getElementById("change-text-btn").addEventListener("click", function() {
  document.getElementById("intro").textContent = "The text has been changed using DOM!";
});

// 2. Add a new item to the list
document.getElementById("add-item-btn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("my-list").appendChild(newItem);
});

// 3. Modify page title style
document.getElementById("page-title").style.color = "blue";
