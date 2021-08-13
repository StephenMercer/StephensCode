# Built In Constructors / Lecture 45 Code
### JS
```javascript
console.log('----------String-----------')
// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';

// console.log(name2)
console.log(typeof name1);
console.log(typeof name2);


console.log('Statement 1')
if(name1 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}
console.log('Statement 2')
if(name2 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}
console.log('Statement 3')
if(name2 == 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}
console.log('-----------Number-----------')
// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num1);
console.log(typeof num2);

console.log('-----------Boolean-----------')
// Boolean 
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1);
console.log(typeof bool2);

console.log('-----------Functions-----------')
// Functions
const getSum1 = function(x, y){
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 4 + 4' )

console.log(getSum1(1,1));
console.log(getSum2(1,1));

console.log('------------Object-------------')
// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});

console.log(john1);
console.log(john2);

console.log('----------Arrays-------------')
// Arrays
const arr1 = [1,2,3,4]
const arr2 = new Array(1,2,3,4)

console.log(arr1);
console.log(arr2);


console.log('-----Regular Expressions-----')
// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\w+');
const re3 = new RegExp('\\w+');

console.log(re1);
console.log(re2);
console.log(re3);



```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Sandbox: Section 5</title>
</head>
<body>
  <h1>Javascript Sandbox: Section 5</h1>
  <script src="app.js"></script>
</body>
</html>
```