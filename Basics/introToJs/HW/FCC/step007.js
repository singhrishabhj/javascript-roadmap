/*
Step 7: Logging Variables Multiple Times

Question:
Now log your `character` variable to the console again.  
You should see the string "Hello", then the string "World", in the console.

Explanation:
- The first `console.log(character)` prints the initial value.
- After reassignment, the second `console.log(character)` prints the new value.
*/

// Solution:
let character = 'Hello';
console.log(character); // prints 'Hello'
character = "World";
console.log(character); // prints 'World'

/*
Notes / Learning:
- You can log the same variable multiple times to see how its value changes.
- Useful for debugging and understanding the flow of your program.
- Shows how reassignment works in practice.
*/
