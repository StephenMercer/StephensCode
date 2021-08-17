# Fetch with Async & Await / Lecture 72
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
### JS EASYHTTP3.JS
```javascript

/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Stephen Mercer
 * @Licence MIT
 * 
 * 
 **/

class EasyHTTP {

  // Make an HTTP GET Request
   async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData; 
 }

// Make an HTTP POST Request
    async post(url, data){
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const resData = await response.json();
      return resData;
     }


// Make a HTTP PUT Request
  async put(url, data){
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const resData = await response.json();
      return resData;
  }

// Make a HTTP Delete Request
async delete(url){
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  });

  const resData = await 'Resource Deleted...';
  return resData;
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
  <title>EasyHTTP3 Example</title>
</head>
<body>
  
  <script src="easyhttp3.js"></script>
  <script src="app.js"></script>
</body>
</html>
```