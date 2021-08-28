# Destructing / Lecture 91 Code
### JS APP.JS
```javascript
// Destructuring Assignment


let a,b;
[a, b] = [100, 200];
// Rest Pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

console.log(rest);

({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(rest); 




// Array Destructing
  

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse Array return from function
// function getPeople(){
//    return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);




// Object Destructuring


const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name,
//       age = person.age
//       city = person.city;

// New ES6
const { name, age, city, sayHello } = person;

console.log( name, age, city );

sayHello();
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Sandbox</title>
</head>
<body> 
  <script src="app.js"></script>
</body>
</html>
```