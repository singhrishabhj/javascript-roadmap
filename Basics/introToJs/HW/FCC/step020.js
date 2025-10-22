/*
Step 20: Accessing Array Elements

Question:
You can access the values inside an array using the **index** of the value.  

- An index is a number representing the position of the value in the array, starting from 0 for the first value.  
- You can access the value using **bracket notation**, e.g., array[0].

Task:
Use `console.log` and bracket notation to print the first value in your `rows` array.
*/

// Solution:
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]); // prints 'Naomi'

/*
Notes / Learning:
- Array indices start at 0, so the first element is at index 0.
- You can access any element by its index, e.g., rows[1] → 'Quincy', rows[2] → 'CamperChan'.
- Bracket notation is essential for working with array elements in loops and dynamic access.
*/
