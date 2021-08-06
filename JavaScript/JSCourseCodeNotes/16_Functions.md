# Functions / Lecture 16 Code
### JS
```javascript
// if(something is true){
//   do something
// } if something else is true{
//   do something else
// }

const id = 100;

//EQUAL TO VALUE
// if(id == 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }

// // NOT EQUAL TO VALUE
// if(id != 101){
//   console.log('CORRECT')
// } else {
//   console.log('INCORRECT')
// }

// // EQUAL TO VALUE & TYPE
// if(id === 100){
//   console.log('CORRECT'); //INCORRECT BECAUSE STRING
// } else {
//   console.log('INCORRECT')
// }
// // NOT EQUAL TO VALUE & TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }

//Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }


// GREATER THAN OR LESS THAN
// if(id >= 200){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE 

const color = 'yellow';

if(color === 'red'){
  console.log('Color is red');
} else if(color === 'blue'){
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// Logical operators
const name = 'Steve';
const age = 70;

// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >=13 && age <= 19){
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65) {
  console.log(name + ' can not run in this race')
} else {
  console.log(name + ' can run in this race')
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if(id === 100)
 console.log('CORRECT');
else
 console.log('INCORRECT');
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
  <div id="listhere"></div>
  <div class="list2"></div>
  <div class="list2"></div>

</body>
<script src="app.js"></script>
</html>

```