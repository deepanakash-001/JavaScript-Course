//  VARIABLES & DATA TYPES

let name = "Deepan";
const age = 25;
var city = "Chennai";

// ------------------------------------------
//  Condition Statements(IF / ELSE / SWITCH)

let fruit = "banana";
if (fruit === "apple") {
    console.log("It’s an apple");
} else if (fruit === "banana") {
    console.log("It’s a banana");
} else {
    console.log("Unknown fruit");
}

switch (fruit) {
    case "apple":
        console.log("Apple");
        break;
    case "banana":
        console.log("Banana");
        break;
    default:
        console.log("Other fruit");
}

// ------------------------------------------
//  LOOPS: for, while, do-while

for (let i = 0; i < 3; i++) {
    console.log("For Loop:", i);
}

let j = 0;
while (j < 3) {
    console.log("While Loop:", j);
    j++;
}

let k = 0;
do {
    console.log("Do-While Loop:", k);
    k++;
} while (k < 3);

// ------------------------------------------
//  FUNCTIONS

function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Deepan"));

// Arrow Function
const add = (a, b) => a + b;
console.log("Sum:", add(10, 20));

// ------------------------------------------
//  ARRAYS 

let fruits = ["apple", "banana", "mango"];
console.log("First Fruit:", fruits[0]);
fruits.push("orange");
console.log("All Fruits:", fruits.join(", "));

// Multidimensional Array
let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log("Matrix[0][1]:", matrix[0][1]); // 2
console.log("Matrix:");
for (let row of matrix) {
    console.log(row.join(" "));
}

// ------------------------------------------
//  MATH FUNCTIONS

console.log(Math.round(4.7));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.max(10, 20));
console.log(Math.random()); // 0 to <1
console.log(Math.floor(Math.random() * 10)); // 0 to 9

// ------------------------------------------
//  STRING FUNCTIONS

let text = "  Hello JavaScript  ";
console.log(text.trim());
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("Java"));
console.log(text.replace("JavaScript", "World"));
console.log(text.split(" "));

// ------------------------------------------
//  COLLECTIONS: Map, Set, WeakMap, WeakSet

let map = new Map();
map.set("name", "Deepan");
console.log(map.get("name"));

let set = new Set();
set.add("apple");
set.add("banana");
console.log(set.has("banana"));

let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "Data");

let weakSet = new WeakSet();
let user = { id: 1 };
weakSet.add(user);

// ------------------------------------------
//  DESTRUCTURING & SWAP
let a = 1, b = 2;
[a, b] = [b, a];
console.log("Swapped:", a, b);

// ------------------------------------------
//  RANDOM CHARACTER PRINTING FROM WORD
let word = "deepan";
console.log("Random Letters:");
for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * word.length);
    console.log(word[randomIndex]);
}

// ------------------------------------------
//  SHUFFLE WORD (Fisher-Yates Shuffle)
let chars = word.split("");
for (let i = chars.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
}
console.log("Shuffled Word:", chars.join(" "));

// ------------------------------------------
//  TEMPLATE LITERALS
console.log(`My name is ${name} and I am ${age} years old.`);

