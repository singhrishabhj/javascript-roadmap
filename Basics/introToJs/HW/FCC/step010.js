/*
Step 10: Assigning a Value to an Uninitialized Variable

Question:
The default value of an uninitialized variable is `undefined`.  
This is a special data type representing a value that does not have a definition yet.

You can still assign a value to an uninitialized variable.

Example:
let uninitialized;
uninitialized = "assigned";

Task:
Assign the string "Test" to your `secondCharacter` variable below your declaration.  
Open the console to see how your log has changed.
*/

// Solution:
let character = 'Hello';
console.log(character); // prints 'Hello'

character = "World";

let secondCharacter;
secondCharacter = "Test";
console.log(secondCharacter); // prints 'Test'

/*
Notes / Learning:
- `undefined` indicates a variable exists but has no value assigned yet.
- After assigning a value, the variable holds that value and can be used in expressions.
- You can initialize a variable at declaration or assign it later; both are valid.
- Example:
    let a;         // uninitialized
    a = 10;        // now initialized
    console.log(a); // prints 10
*/
