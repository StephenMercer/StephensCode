#  Error Handling with Try...Catch / Lecture 82 Code
### JS APP.JS
```javascript
const user = {email: 'jdoe@gmail.com'};

try {
  // Produce a ReferenceError 
  // myFunction();

  // Produce a TypeError
  //null.myFunction();

  // Will not produce a Syntax Error identified as a string
  // console.log(eval('"Hello World"'))
  // Will produce a Syntax Error
  // eval('Hello World')
  
  // Will produce URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name')
  }
} catch(e) {
  console.log(`User Error: ${e.message}`)
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name)
  // console.log(e instanceof TypeError);
  // console.log(`${e.name}: you can write whatever in catch`)
} finally {
  console.log('Finally runs regardless of result...')
}

console.log('Program continues...');

// As opposed to script does not continue

// newFunction();

// console.log('Program continues...')

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
