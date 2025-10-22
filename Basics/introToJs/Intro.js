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


