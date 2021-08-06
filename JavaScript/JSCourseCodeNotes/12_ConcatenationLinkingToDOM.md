# Concatenation & Linking to DOM / Lecture 12 Code
### JS
```javascript
const name = 'John';
const age = '31';
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without Template Strings es5
html = '<ul><li>Name: ' + name + '</li><li>Age:'+ age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>'

html = '<ul>' +
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';

  function hello(){
    return 'hiiiiiiiiii';
  }

// With Template Strings es6
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Name: ${age}</li>
    <li>Name: ${job}</li>
    <li>Name: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>  
`;





// SIDE NOTE - METHODS OF LINKING TO DOM

// const list = document.querySelector('#listhere')

// list.innerHTML = html;

//document.getElementsByClassName('listhere')[0].innerHTML = html;
console.log(document.getElementsByClassName('list2'))

for ( i = 0; i < document.getElementsByClassName('list2').length - 1; i++) {
  document.getElementsByClassName('list2')[i].innerHTML = html;
}
// for ( i = 0; i < 2; i++) {
//   document.getElementsByClassName('list2')[i].innerHTML = html;
// }
//document.getElementsByClassName('list2')[i].innerHTML = html;



//document.getElementById('listhere').innerHTML = html;

//document.body.innerHTML = html;

//END SIDE NOTE 
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