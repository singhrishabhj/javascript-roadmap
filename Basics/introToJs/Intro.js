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




//*****************************
// STRINGS : How string work in javascript */

let string1 = "I am String";
let string2 = 'i am string' 
let templateString = `i am also a string but can be wrtitten
in multiple line`


console.log(string1);
console.log(string2);
console.log(templateString);
//there is no doffernce if you piut string in single quote or dibule quote it behave same

//String can be written in multiple line using ` `. and knwon as template string.

//varibale is used in camel Case.

function greet(firstNameVar){
    console.log("Hi "+ firstName + "!!")
    console.log(`Hi $(firstName)!`)
}

let firstName = "Rishabh"

greet();