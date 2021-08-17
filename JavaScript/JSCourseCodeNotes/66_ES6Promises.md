# ES6 Promises/ Lecture 66
### JS
```javascript
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);
      //const error = 'hello';
      //const error = true;
      const error = null;
      //const error = false;

      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
      resolve();
    }, 2000);
  });
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

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts)
.catch(function(err) {
  console.log(err);
});
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