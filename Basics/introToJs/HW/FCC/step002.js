/*
Step 2: Declaring Variables in JavaScript

Question:
One of the most important concepts in programming is variables. A variable points to a specific memory address that stores a value. Variables are given a name which can be used throughout your code to access that value.

Declaring a variable means giving it a name. In JavaScript, this is often done with the `let` keyword. For example:

Example:
let hello;

Variable naming rules:
- Names can include letters, numbers, dollar signs, and underscores.
- Names cannot contain spaces.
- Names must not begin with a number.

Task:
Use the `let` keyword to declare a variable called `character`.

Note: It is common practice to end statements in JavaScript with a semicolon `;`.
*/

// Solution:
let character;

/*
Notes / Learning:
- Declaring variables allows you to store values in memory.
- `let` is block-scoped, unlike `var` which is function-scoped.
- `var` is function-scoped:
    - Accessible anywhere inside the function
    - Can "leak" outside blocks like if/for loops
- `let` is block-scoped:
    - Accessible only inside the nearest { } block
    - Safer, avoids accidental overwrites
- For global variables:
    - `var` declared outside a function → added to window (global object in browser)
    - `let` declared outside a block → global in your script, but not added to window
- Always follow naming conventions to avoid errors.
*/
