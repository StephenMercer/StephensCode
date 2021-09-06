# ES2015 Modules / Lecture 114 Code
### JS APP.JS
```javascript
// Common JS Module Syntax
// const person = require('./mymodule1')

// console.log(person.name);

// ES2015 Module

import { person, sayHello } from './mymodule2'

console.log(person.name);

console.log(sayHello());

// How to import all from one file
import * as mod from './mymodule2'

console.log(mod.person.name);

console.log(mod.sayHello());


// Don't have to use curly braces
import greeting from './mymodule2';

console.log(greeting);

```
### MYMODULE1.JS
```javascript
module.exports = {
    name: 'Brad',
    email: 'test@test.com'
}
```
### MYMODULE2.JS
```javascript
export const person = {
    name: 'John',
    age: 30,
}

export function sayHello() {
    return `Hello ${person.name}`
}

const greeting = 'Hello Console';
export default greeting;

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