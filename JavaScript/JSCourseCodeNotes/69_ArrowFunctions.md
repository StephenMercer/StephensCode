# Arrow Functions/ Lecture 69
### JS
```javascript
//Arrow Functions

// Old Way
const sayHello = function() {
  console.log('Hello');
}

sayHello();

// New Way
const sayGoodbye = () => {
  console.log('Goodbye');
}

sayGoodbye();


// One line function does not need braces new way
const sayGoodnight = () => console.log('Goodnight');

sayGoodnight();

// New Way
const sayGoodmorning = () => 'Goodmorning';

console.log(sayGoodmorning());

// Old Way same as directly above
const sayGoodevening = function() {
  return 'Hello';
}

console.log(sayGoodevening());

// Worst Way
// const sayGoodday = function() {
//   return {msg: 'Hello', name: 'Greg'};
// }

// Less Ok Way
// const sayGoodday = function() {
//   console.log({msg: 'Hello', name: 'Greg'});
// }

// Ok Way
// const sayGoodday = () => {return {msg: 'Hello', name: 'Greg'}}

// Best way
const sayGoodday = () => ({msg: 'Goodday', name: 'Greg'})


console.log(sayGoodday());

// Double
const sayGoodnoon = (firstName, lastName) => console.log(`Goodnoon ${firstName} ${lastName}`)

sayGoodnoon('James', 'Perry')

//Single doesnt need parenthesis
const sayGoodafternoon = name => console.log(`Good Afternoon ${name}`)

sayGoodafternoon('James Perry')

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
// return name.length;
// });

//Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
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
  <h1>Arrow Functions</h1>

  <script src="app.js"></script>
</body>
</html>
```