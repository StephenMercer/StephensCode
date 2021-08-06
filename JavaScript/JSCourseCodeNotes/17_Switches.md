# Switches / Lecture 17 Code
### JS
```javascript
const color = 'yellow';

switch(color){
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;  
}

switch(new Date().getDay()){
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
  default:
      console.log('Nothing')
    break;
}

console.log(new Date().getDay())

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
  break;
  case 1:
    day = 'Monday';
  break;
  case 2:
    day = 'Tuesaday';
  break;
  case 3:
    day = 'Wednesday';
  break;
  case 4:
    day = 'Thursday';
  break;
  case 5:
    day = 'Friday';
  break;
  case 6:
    day = 'Saturday';
  break;
}

console.log(`Today is ${day}`)
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