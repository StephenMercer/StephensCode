# Declarations / Lecture 7 Code
### JS
```javascript
// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//Init var
var greeting
console.log(greeting);
greeting = 'Hello';
console.log(greeting)

// letters, numbers, _, $
// Can not start with a number

//var 1name = 'John';

// Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; //Pascal case
var firstname; //Not recommended

// //LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
const name = 'John';
console.log(name);
// Can not reassign
//name = 'Sara';
// Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30,
  alive: true,
}

person.name = 'Sara';
person.age = 21;

console.log(person);

const fruit = ['apple', 'grape', 'mango']
fruit.push('pineapple')

console.log(fruit);

const numbers = [1,2,3,4,5]
//Can do this \/
numbers.push(6);
console.log(numbers)
//Can't do this \/
//numbers = [1,2,3,4,5,6]
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
