# Console Log / Lecture 11 Code
### JS
```javascript
const firstName = 'Williams';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello my name is Stephen';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append 
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age + ' years old';

//Escaping
//val = 'That's awesome, I can't wait';
val = "That's awesome, I can't wait"; //double quotes
val = 'That\'s awesome, I can\'t wait'; //escaping

//Length
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

//Change case
 val = firstName.toUpperCase();
 val = firstName.toLowerCase();

 val = firstName[2];

 //IndexOf
 val = firstName.indexOf('l') 
 val = firstName.lastIndexOf('l')

 // charAt()
 val = firstName.charAt('2');
 // Get lat char
 val = firstName.charAt(firstName.length - 1)

 // substring()
 val = firstName.substring(0, 4);

 // slice()
 val = firstName.slice(0,5);
 val = firstName.slice(-4);


 // split()
 val = str.split(' ');

 // replace()
 val =str.replace('Stephen', 'John')

 // includes()
 val = str.includes('Hello') // =true
 val = str.includes('hello') // =false
 val = str.includes('lol') // =false
 val = str.includes('llo') // =true




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
<script src = "app.js"></script>
</body>
</html>
```