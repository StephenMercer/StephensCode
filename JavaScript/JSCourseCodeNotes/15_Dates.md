# Dates / Lecture 15 Code
### JS
```javascript
let val;

const today = new Date();

val = today;   // Object
val = today.toString();

let birthday = new Date('6-4-2002 22:59:27');
birthday = new Date('September 10 1981');
birthday = new Date('11/4/2021');

val = birthday.getMonth(); // Janurary is 0.
val = today.getMonth();
val = today.getDate();
val = today.getDay();  //Sunday is 0
val = today.getFullYear();
val = today.getHours();   // Hrs 0-23
val = today.getMinutes(); // 0-59mins
val = today.getSeconds(); //0-59sec
val = today.getMilliseconds(); //0-999milli
val = today.getTime(); //timestamp from 1970 jan 1

birthday.setMonth(1);
birthday.setDate(25);
birthday.setFullYear(2016);
birthday.setHours(7);
birthday.setMinutes(37);
birthday.setSeconds(21);


console.log(birthday)
console.log(val)

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