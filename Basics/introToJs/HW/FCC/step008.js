/*
Step 8: Camel Case Naming Convention

Question:
When variable names are more than one word, there are specific naming conventions for how you capitalize the words.  
In JavaScript, the convention to use is **camel case**.

Camel case rules:
- The first word is entirely lowercase.
- Subsequent words are **title-cased** (first letter uppercase).

Example:
let variableOne;
let secondVariable;
let yetAnotherVariable;
let thisIsAnAbsurdlyLongName;

Task:
Use camel case to declare a new `secondCharacter` variable.
*/

// Solution:
let character = 'Hello';
console.log(character);
character = "World";
console.log(character);

let secondCharacter;

/*
Notes / Learning:
- Camel case improves readability for multi-word variable names.
- Do not use spaces, hyphens, or special characters.
- Other common conventions (less used in JS):
  - snake_case → my_variable_name
  - PascalCase → MyVariableName (used for classes)
*/
