# Fetch With Promises/ Lecture 70
### JS APP.JS
```javascript
const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update User
// http.put('https://jsonplaceholder.typicode.com/users/6', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/6')
.then(data => console.log(data))
.catch(err => console.log(err));
```
### JS EASYHTTP2.JS
```javascript


/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Stephen Mercer
 * @Licence MIT
 * 
 * 
 **/

class EasyHTTP {

  // Make an HTTP GET Request
  get(url){
    return new Promise((resolve, reject) => {
    fetch(url)
     .then(res => res.json())
     .then(data => resolve (data))
     .catch(err => reject (err));
  });
 }

// Make an HTTP POST Request
    post(url, data){
      return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }


// Make a HTTP PUT Request
  put(url, data){
      return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

// Make a HTTP Delete Request
delete(url){
  return new Promise((resolve, reject) => {
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(() => resolve('Resource Deleted...'))
  .catch(err => reject(err));
});
}

}
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EasyHTTP2 Example</title>
</head>
<body>
  
  <script src="easyhttp2.js"></script>
  <script src="app.js"></script>
</body>
</html>
```