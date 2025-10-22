/**
 * Topic: Variable Declaration, Data Types & Conditionals in JavaScript
 * Author: Rishabh Singh
 * Goal: Help beginners understand variables, types, operators, and conditional logic
 */

//***********************************************
// JavaScript Introduction
//***********************************************

console.log("Inside JavaScript!");

// JavaScript executes code line by line, from top to bottom

//----------------------------------------------
// Variable Declaration
//----------------------------------------------

// 'var_name' is a variable that currently holds an undefined value.
let var_name;

// Default value of a declared but unassigned variable is 'undefined'
console.log("Hello variable: " + var_name); 
// Output: Hello variable: undefined

// JavaScript variables are dynamically typed
// A variable can hold any type of value — number, string, boolean, etc.
// Think of a variable like water: it takes the type of whatever value you put in it.

var_name = 10; 
console.log("Now var_name holds a number:", var_name); 
// Output: Now var_name holds a number: 10

//----------------------------------------------
// Difference between '+' and ',' in JavaScript
//----------------------------------------------

// '+' → Adds numbers or concatenates strings
// ',' → Separates multiple values, especially in console.log

console.log(10 + 20);            // Addition → 30
console.log("Hello " + "Rishabh"); // Concatenation → "Hello Rishabh"
console.log("Age: " + 25);       // String + Number → "Age: 25"
console.log("Age:", 25);         // Comma separates values → "Age: 25"

//----------------------------------------------
// Type Conversion Examples
//----------------------------------------------

console.log(true + true);    // true → 1, true → 1 → 2
console.log(false + true);   // 0 + 1 → 1
console.log(null + 5);       // null → 0 → 5
console.log(undefined + 5);  // undefined → NaN (Not a Number)

//----------------------------------------------
// Summary Table
//----------------------------------------------
/*
| Expression           | Result | Explanation                                   |
|----------------------|---------|----------------------------------------------|
| 10 + 20              | 30      | Number + Number = Addition                   |
| "10" + 20            | "1020"  | String + Number → String concatenation       |
| true + false         | 1       | Boolean converted to Number                  |
| null + 5             | 5       | null → 0                                     |
| undefined + 5        | NaN     | undefined → Not a Number                     |
| console.log("Hi",10) | Hi 10   | Comma separates values                       |
*/

//----------------------------------------------
// Dynamic Typing Demonstration
//----------------------------------------------

var_name = 10;
console.log(var_name);

var_name = 10.2;
console.log(var_name);

// Variables are containers — you can store any type in them

//----------------------------------------------
// Strings, Boolean, Null
//----------------------------------------------

let newVar;

newVar = "I am a String";
console.log("String example:", newVar);

newVar = true;  // Boolean
console.log("Boolean example:", newVar);

newVar = null;  // Null
console.log("Null example:", newVar);

//----------------------------------------------
// Checking Variable Types
//----------------------------------------------

var_name = 10;
console.log(typeof var_name); // number

var_name = "hello";
console.log(typeof var_name); // string

var_name = false;
console.log(typeof var_name); // boolean

var_name = 10.1;
console.log(typeof var_name); // number

console.log(5 / 2); // 2.5 → JavaScript handles decimal division

//----------------------------------------------
// Conditional Statements
//----------------------------------------------

let number = 10;

if (number % 2 === 0) {
    console.log("I am even");
} else {
    console.log("Not even");
}

let days = "saturday";

if (days === "mon" || days === "thursday" || days === "wednesday" || days === "friday") {
    console.log("Today is a working day");
} else if (days === "saturday" || days === "sunday") {
    console.log("Weekend");
} else {
    console.log("------error-----");
}

//----------------------------------------------
// Switch Case Example
//----------------------------------------------

days = "mon";

switch (days) {
    case "mon":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("Today is a working day");
        break;
    case "saturday":
    case "sunday":
        console.log("Weekend");
        break;
    default:
        console.log("------error-----");
}


//***********************************************
// Loops in JavaScript
//***********************************************
/**
 * JavaScript provides different types of loops to repeat tasks:
 * 1. for loop
 * 2. while loop
 * 3. do-while loop
 * 4. forEach (used with arrays)
 */

// Example: for loop from 1 to 10
for (let num = 1; num <= 10; num++) {
    console.log("Number is:", num);
}

//***********************************************
// FizzBuzz Example
//***********************************************
/**
 * Task: Print numbers from 1 to 20 with rules:
 * - If divisible by 3 → print "fizz"
 * - If divisible by 5 → print "buzz"
 * - If divisible by both 3 & 5 → print "fizz buzz"
 * - Otherwise, print the number itself
 */

let numbers = 20;
for (let i = 1; i <= numbers; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz buzz"); // Divisible by both 3 and 5
    } else if (i % 3 === 0) {
        console.log("fizz"); // Divisible by 3 only
    } else if (i % 5 === 0) {
        console.log("buzz"); // Divisible by 5 only
    } else {
        console.log(i); // Not divisible by 3 or 5
    }
}

//***********************************************
// Break Statement
//***********************************************
/**
 * 'break' can be used inside loops to exit immediately 
 * once a condition is met. Example is given below
 */

console.log("Break Statement Example:");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i =", i);
        break; // Exits the loop when i is 5
    }
    console.log("i =", i);
}

// Output:
// i = 1
// i = 2
// i = 3
// i = 4
// Breaking the loop at i = 5


//***********************************************
// Functions in JavaScript
//***********************************************
/**
 * Functions help write reusable blocks of code.
 * Syntax:
 *   function functionName() {
 *       // code
 *   }
 */

// Example function
function fn() {
    console.log("I am a Function");
}

// Calling the function multiple times
console.log("Hello Again");
fn(); // Output: I am a Function
fn(); // Output: I am a Function

//***********************************************
// Function with Parameters and Return Value
//***********************************************

/**
 * This function accepts two inputs (parameters) and returns their sum.
 * 1. Parameters: a, b
 * 2. Inside the function:
 *    - Logs the values of a and b
 *    - Adds a and b, stores in variable 'd'
 *    - Returns 'd' to the caller
 */

function fun(a, b) {
    console.log("a:", a);  // Prints the value of a
    console.log("b:", b);  // Prints the value of b
    let d = a + b;         // Adds a and b
    return d;              // Returns the result to the caller
}

// Calling the function and storing the result
let result = fun(10, 20); 
// Step by step explanation:
// 1. a = 10, b = 20
// 2. Logs: a: 10
//           b: 20
// 3. d = 10 + 20 = 30
// 4. Returns 30 and stores it in 'result'

console.log("result:", result); // Output: result: 30

//***********************************************
// Key Notes for Beginners
//***********************************************
/**
 * 1. A function can take zero or more parameters.
 * 2. A function can return a value using 'return'.
 * 3. We can store the returned value in a variable.
 * 4. The order of parameters matters:
 *    - fun(a, b) is different from fun(b, a)
 */




//***********************************************
// STRINGS: How strings work in JavaScript
//***********************************************

// Strings can be created using double quotes, single quotes, or backticks (template literals)
let string1 = "I am String";       // Double quotes
let string2 = 'i am string';       // Single quotes
let templateString = `I am also a string but can be written
in multiple lines using backticks`;

// Printing strings
console.log(string1);        // Output: I am String
console.log(string2);        // Output: i am string
console.log(templateString); // Output: I am also a string but can be written (with line break)

//***********************************************
// Key Points About Strings
//***********************************************

/**
 * 1. Single quotes (' ') and double quotes (" ") work the same way in JavaScript.
 * 2. Template strings (backticks ` `) allow:
 *    - Multi-line strings
 *    - Easy variable interpolation using `${variable}`
 * 3. Use camelCase for variable names: e.g., firstNameVar, userName, etc.
 * 4. Strings are immutable in JavaScript:
 *    - Once created, the value of a string cannot be changed.
 *    - Operations like concatenation create a new string.
 */

//***********************************************
// Using Strings in Functions
//***********************************************

function greet(firstName) {
    // Concatenation using +
    console.log("Hi " + firstName + "!!");  

    // Template literal (preferred)
    console.log(`Hi ${firstName}!!`);
    /**
     * Both outputs are same, but template literals are cleaner.
     * Use `${variableName}` inside backticks to insert variable values.
     */
}

// Calling the function
let firstName = "Rishabh";
greet(firstName); 
// Output:
// Hi Rishabh!!
// Hi Rishabh!!

//***********************************************
// Additional String Tips for Beginners
//***********************************************

/**
 * 1. You can combine strings using +:
 *    console.log("Hello " + "World"); // Hello World
 * 2. Template literals are especially useful for multi-line text or dynamic content:
 *    let age = 25;
 *    console.log(`My name is ${firstName} and I am ${age} years old.`);
 * 3. Strings have many built-in methods:
 *    - string.length → gives the length
 *    - string.toUpperCase() / string.toLowerCase() → change case
 *    - string.includes("text") → checks if substring exists
 *    - string.replace("old", "new") → replace content
 */
