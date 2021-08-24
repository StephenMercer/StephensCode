#  Evaluation Functions / Lecture 83 Code
### JS APP.JS
```javascript
let re;
re = /hello/;
re = /hello/i;  // i = case INSENSITIVE
//re = /hello/g;  // g = Global search

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hello world');
//const result = re.exec('brad hello world');
//const result = re.exec('hi world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// case sensitive
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null 
// let str = 'Hello There';
// str = 'Hell There';
// const result = str.match(re);
// console.log(result);  
 
// search() - Returns index of the first match if not found returns -1
// let ste = 'Hello There';
// ste = 'wav a hello there'
// //ste = 'wav a hekko there'
// const result = ste.search(re);
// console.log(result)

// replace() - Return new string with some or all matches of a pattern
const sta = 'Hello There';
const newsta = sta.replace(re, 'Hi');
console.log(newsta);

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
