# Callback Functions / Lecture 63
### JS
```javascript

// Synchronous JavaScript
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post Three'});

// getPosts();

// Asynchronous JavaScript

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts)
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajax Sandbox</title>
</head>
<body>
  <script src="app.js"></script>
</body>
</html>
```