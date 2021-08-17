# Async & Await / Lecture 71
### JS
```javascript
 async function myFunc() {
  //return 'Hello';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 1000);
  });

  const error = false;

  if(!error){
    const res = await promise; // Wait until promise is resolved
    return res;
  } else {
    await Promise.reject(new Error('Something went wrong'));
  }
}

console.log(myFunc())

myFunc()
  .then(res => console.log(res))
  .catch(err => console.log(err));


  // Fetch

  async function getUsers() {
    // await response of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once its resolved
    const data = await response.json();

    // only proceed once the second promise is resolved
    return data;
  }

  getUsers().then(users => console.log(users));
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