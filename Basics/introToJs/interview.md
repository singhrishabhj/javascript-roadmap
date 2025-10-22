# JavaScript Interview Question: Difference between `+` and `,` Operator

## Question
**Q:** What is the difference between the `+` operator and the `,` (comma) operator in JavaScript?

---

## Answer
The `+` operator in JavaScript is used for **arithmetic addition** when applied to numbers and **string concatenation** when at least one operand is a string.  
The `,` operator is used to **separate multiple expressions**, and it returns the value of the **last evaluated expression**.  
In `console.log()`, it simply separates multiple values to be printed.

### Example
```javascript
console.log(10 + 20);       // 30  (Addition)
console.log("Hello " + 10); // "Hello 10" (Concatenation)
console.log(10, 20);        // 10 20 (Comma separates values)
```

---

## Follow-Up Questions

### 1. What happens if one of the operands of `+` is a string and the other is a number?
JavaScript converts the number to a string and performs concatenation instead of addition.

```javascript
console.log("10" + 5); // Output: "105"
```

---

### 2. What is the output of `(1, 2, 3)` in JavaScript?
It returns `3`.  
The comma operator evaluates each expression from left to right and returns the value of the last expression.

```javascript
console.log((1, 2, 3)); // Output: 3
```

---

### 3. How does `console.log("A", "B", "C")` behave compared to `console.log("A" + "B" + "C")`?
- `console.log("A", "B", "C")` → prints `A B C` (comma separates arguments)  
- `console.log("A" + "B" + "C")` → prints `ABC` (strings are concatenated)

---

### 4. What happens when we add `undefined` or `null` using the `+` operator?
- `undefined + 5` → `NaN` (undefined converts to Not a Number)  
- `null + 5` → `5` (null converts to 0)

```javascript
console.log(undefined + 5); // NaN
console.log(null + 5);      // 5
```

---

## Summary Table

| Expression           | Result | Explanation                                   |
|----------------------|---------|----------------------------------------------|
| `10 + 20`            | `30`    | Number + Number = Addition                   |
| `"10" + 20`          | `"1020"`| String + Number → String concatenation        |
| `true + false`       | `1`     | true→1, false→0 → 1 + 0 = 1                  |
| `null + 5`           | `5`     | null→0 → 0 + 5 = 5                           |
| `undefined + 5`      | `NaN`   | undefined → NaN                              |
| `console.log("Hi",10)`| `Hi 10`| Comma separates arguments in console.log     |

---

## Key Takeaways
- `+` joins strings or adds numbers.  
- `,` separates values or expressions.  
- JavaScript automatically converts data types when needed (type coercion).

---

**Tip:** Always check the data types of variables before using the `+` operator to avoid unexpected concatenation.
