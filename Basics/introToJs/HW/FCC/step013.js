/*
Step 13: Declaring Multiple Variables and Initialization

Question:
Before moving forward, review the concepts you have learned.

Task:
- Use the `let` keyword to declare a `profession` variable and an `age` variable.
- Initialize `profession` with the string "teacher".
- Do **not** initialize `age` with any value.
- Log both variables to the console to see the results.
*/

// Solution:
let character = "Hello";

let profession;
let age;

profession = "teacher";

console.log(age);        // prints undefined
console.log(profession); // prints 'teacher'

/*
Notes / Learning:
- You can declare multiple variables in a single script.
- Uninitialized variables have the value `undefined`.
- Logging variables helps verify their current value.
- Good practice: initialize variables that you know the value for; leave others uninitialized if value is unknown.
*/
