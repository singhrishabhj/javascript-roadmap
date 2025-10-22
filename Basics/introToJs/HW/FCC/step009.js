/*
Step 9: Uninitialized Variables

Question:
When you declare a variable without initializing it, it is considered **uninitialized**.  
Currently, your `secondCharacter` variable is uninitialized.

Task:
Add a console.log() to see what the value of your `secondCharacter` variable is.
*/

// Solution:
let character = 'Hello';
console.log(character); // prints 'Hello'

character = "World";

let secondCharacter;
console.log(secondCharacter); // prints undefined

/*
Notes / Learning:
- A variable declared but not initialized has the value `undefined`.
- `undefined` means the variable exists, but no value has been assigned yet.
- This helps identify variables that need a value before using them in calculations or concatenation.
*/
