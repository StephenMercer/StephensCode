# Custom HTTP Library/ Lecture 64-65
### JS APP.JS
```javascript
const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/5', function(err, post){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
})

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
```
### JS EASYHTTP.JS
```javascript
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send()
}

// Make a HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
      callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make a HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
      callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make a HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send()
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
  <title>EasyHTTP Example</title>
</head>
<body>
  <h1>EasyHTTP Example</h1>

  <!-- Order Important App JS calls on easyhttp-->
  <script src="easyhttp.js"></script>
  <script src="app.js"></script>
</body>
</html>
```