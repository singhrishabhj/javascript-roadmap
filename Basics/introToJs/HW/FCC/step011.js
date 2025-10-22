/*
Step 11: Assigning the Value of One Variable to Another

Question:
You can assign the value of a variable to another variable.

Example:
let first = "One";
let second = "Two";
second = first;
// Now, second has the value "One"

Task:
Change your `secondCharacter` assignment from "Test" to your `character` variable.  
Then open the console to see what gets logged.
*/

// Solution:
let character = 'Hello';
console.log(character); // prints 'Hello'

character = "World";

let secondCharacter;
secondCharacter = "Test";        // initial assignment
secondCharacter = character;     // assign value of 'character' variable
console.log(secondCharacter);    // prints 'World'

/*
Notes / Learning:
- Variables can hold the value of other variables.
- The right-hand side of `=` is evaluated first, then assigned to the left-hand side.
- Useful when you want one variable to mirror another variable's value.
- Example:
    let a = 5;
    let b = 10;
    b = a; // b is now 5
*/
