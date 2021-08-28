# ES6 Maps / Lecture 92 Code
### JS APP.JS
```javascript
// MAPS = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// Set map values by key
map1.set(key1, 'Value of key1')
map1.set(key2, 'Value of key2')
map1.set(key3, 'Value of key3')

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count Values
console.log(map1.size);

// Iterating Maps


// Loop using for...of to get keys and values
for(let [key, value] of map1){
  console.log(`${key} = ${value}`);
}

// Iterate keys only
for(let key of map1.keys()){
  console.log(key);
}

// This also works but doesn't work for the values 
for(let [key] of map1){
  console.log(key);
}


// Iterate Values Only
for(let value of map1.values()){
  console.log(value);
}

// Loop with forEach
map1.forEach((value, key) => console.log(`${key} = ${value}`));

// CONVERT TO ARRAYS

// Create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create an array of the values
const ValArr = Array.from(map1.values());
console.log(ValArr);


// Create an array of the keys 
const KeyArr = Array.from(map1.keys());
console.log(KeyArr);

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