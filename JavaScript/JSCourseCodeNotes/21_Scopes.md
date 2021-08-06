# Scopes / Lecture 21 Code
### JS
```javascript
// Global Scope
var a = 1;
let b = 2;
const c = 3;

// Function scope

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope:', a, b, c)
// }

// test();

// console.log('Global Scope:', a, b, c);

// Block Scope

// if(true){
//   var a = 8;
//   let b = 9;
//   const c = 10;
//   console.log('Block Scope:', a, b, c)
// }

for(let a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}



console.log('Global Scope:', a, b, c);

for(var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}

console.log('Global Scope:', a, b, c);

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
  <div style="margin-left: 3000px;"></div>
  <div id="listhere"></div>
  <div class="list2"></div>
  <div class="list2"></div>

  <div style="margin-bottom: 1500px;"></div>
  <a style="margin-left: 3000px;"></a> 
```