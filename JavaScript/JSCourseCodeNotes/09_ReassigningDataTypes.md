#  Reassigning Data Types / Lecture 9 Code
### JS
```javascript
// PRIMITIVE TYPES

// String
const name = 'John Doe';

console.log(typeof name)
// Number
const age = 45;

console.log(typeof age)
// Boolean
const hasKids = true;

console.log(typeof hasKids)
// Null, will show as object but this is error
const car = null;

console.log(typeof car)
// Undefined
let test;

console.log(typeof test)
// Symbols
const sym = Symbol();

console.log(sym)

// REFERENCE TYPES - Objects

// Array
const hobbies =(['movies', 'music', 'football'])

console.log(typeof hobbies);
// Object Literal
const address = {
  number: 18,
  street: 'Twickenham Cl',
  Suburb: 'Normanhurst',
  City: 'Sydney',
  State: 'NSW',
}

console.log(typeof address)

console.table(address)
// Date
const today = new Date()

console.log(today)

console.log(typeof today)
// Function
console.log(typeof Date)
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Sandbox: Section 2</title>
</head>
<body>
  <h1>JavaScript Sandbox: Section 2</h1>
<script src = "app.js"></script>
</body>
</html>
```

