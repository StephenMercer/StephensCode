# Arrays / Lecture 13 Code
### JS
```javascript
// Create some Arrays
const numbers = [4, 8, 9, 45, 7, 61, 32, 52, 14, 21, 32];
console.log(numbers);
const numbers2 = new Array(22, 32, 64, 38, 29);
console.log(numbers2);
const fruit = ['Apple', 'Pear', 'Bannana', 'Peach'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
//console.log(mixed);

let val;

//Get array length
val = numbers.length
// Check if it is array
val = Array.isArray(numbers); // = true
val = Array.isArray('hello is a string') // = false
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(32); // returns 6
val = numbers.indexOf(72); // not on array returns -1

// MUTATING ARRAYS
// Add on to end
numbers.push(250);
numbers.push(360);
// Add on to front
numbers.unshift(120);
numbers.unshift(420);
// Take off from end
numbers.pop();
// Take off from font
numbers.shift();

//Splice Value
numbers.splice(1,3); //(1,1) splice start & number of values removed
numbers.splice(5); //remove all elements starting at index 5

//Reverse Array
numbers.reverse();

// Concatenate Array
val = numbers.concat(numbers2); //numbers and numbers2 together

// Sorting Arrays
val = fruit.sort();
//val = numbers.sort(); // Does not work

//Use the "compare function" sort difference
const testNum = [32,61,7,45,120];
val = testNum.sort(function(x, y){
  console.log('x = ' + x + ' y = ' + y);
  console.log(x - y)
 return x - y;
});
console.log(testNum);
// Reverse Sort
val = numbers.sort(function(x, y){
  return y - x;
});

// Find
function under50(num){
  return num < 50;
};
console.log(numbers)
val = numbers.find(under50); // 45

function over50(num1){
  return num1 > 50;
};

val = numbers.find(over50);



console.log(val);

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