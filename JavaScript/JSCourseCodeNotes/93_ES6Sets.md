# ES6 Sets / Lecture 93 Code
### JS APP.JS
```javascript
// SETS - Store unique values of any type
const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(set1.has(100));
set1.add(100);
set1.add(false)

const set2 = new Set([1, true, 'string']);
console.log(set2)

console.log(set1)

// Get count
console.log(set1.size);

// Check for values 
console.log(set1.has(true));  
console.log(set1.has(50 + 50));
console.log(set1.has(true));  
console.log(set1.has({name: 'John'}));

console.log({name: 'John'} === {name: 'John'});
console.log('hello' === 'hello')

// Delete from set
set1.delete('A string');

console.log(set1);

// Iterating through set 

// For...of
for(let item of set1) {
  console.log(item);
}


//ForEach Loop 
set1.forEach((values) => {
  console.log(values);
}); 

// Convert Set to Array
const setArr = Array.from(set1);
console.log(setArr);

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