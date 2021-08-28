# Symbols / Lecture 90 Code
### JS APP.JS
```javascript
// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);
console.log(typeof sym2);

console.log(Symbol('123') === Symbol('123'))
console.log(`Hello ${String(sym2)}`)


// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol();

const myObj = {};

myObj[KEY1] = 'Prop1'
myObj[KEY2] = 'Prop2'
myObj.key3 = 'Prop3'
myObj.key4 = 'Prop4'


console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

console.log(myObj)

// Symbols are not ennumeral in for...in
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`)
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); 
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