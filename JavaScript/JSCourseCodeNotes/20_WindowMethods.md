# Window Methods / Lecture 20 Code
### JS
```javascript
// // WINDOW METHODS / OBJECTS / PROPERTIES

// window.console.log(123)

// // Alert

// window.alert(123)

// // Prompt
// const input = prompt();
// alert(input);

// //Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO')
// }

let val;

//Outer height and width
val = window.outerHeight;
val = window.outerWidth; // = roughly 900

//Inner height and width
val = window.innerHeight;
val = window.innerWidth; //=515 smaller because of console tab

// Scroll Points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;

val = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//val = window.location.reload() 

//History Object

//window.history.go(-3);
val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent; 
val = window.navigator.platform;
val = window.navigator.vendor; 
val = window.navigator.language; 

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
  <div style="margin-left: 3000px;"></div>
  <div id="listhere"></div>
  <div class="list2"></div>
  <div class="list2"></div>

  <div style="margin-bottom: 1500px;"></div>
  <a style="margin-left: 3000px;"></a> 
```