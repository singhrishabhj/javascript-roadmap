/*
Step 6: Reassigning Variables in JavaScript

Question:
When a variable is declared with the `let` keyword, you can **reassign** (change the value of) that variable later on.  

Example:
let programmer = "Naomi";
programmer = "CamperChan";

Note:
- When reassigning a variable, **do not use the `let` keyword again**.
- Reassigning replaces the old value with the new one.

Task:
After your console.log, assign the value "World" to your `character` variable.
*/

// Solution:
let character = 'Hello';
console.log(character);
character = "World";

/*
Notes / Learning:
- Variables declared with `let` can be reassigned; variables declared with `const` cannot.
- Reassigning is useful when the value of a variable needs to change during program execution.
- Always avoid using `let` again during reassignment — just use the variable name.
- Example:
    let a = 5;
    a = 10; // correct
    let a = 10; // ❌ incorrect, would cause an error
*/

console.log("Cheking the commit ")