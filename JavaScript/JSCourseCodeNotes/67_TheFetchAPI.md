# The Fetch API/ Lecture 67
### JS
```javascript
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getMine);

// Get local text file data
function getText() {
  fetch('test.txt')
  .then(function(res){
    return res.text()
  })
  .then(function(data){
    console.log(data)
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err){
    console.log(err);
  });
}


// Get local json data
function getJson() {
  fetch('posts.json')
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    console.log(data);
    let output = '';
    data.forEach(function(post) {
      output += `<li>${post.title}</li> <p>${post.body}</p>`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}

// Get external API
function getMine() {
  fetch('https://api.github.com/users')
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    console.log(data);
    let output = '';
    data.forEach(function(user) {

      output += `<li>${user.login}</li><img src="${user.avatar_url}">`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
}
```
### TEXT
```txt
This is a sample text file.
```
### JSON
```json
[
  {
    "title": "Post One",
    "body": "This is post one"
  },
  {
    "title": "Post Two",
    "body": "This is post one"
  },
  {
    "title": "Post Three",
    "body": "This is post one"
  }
]
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
  <title>Fetch API Sandbox</title>
</head>
<body>
  <div class="container">
    <h1>Fetch API Sandbox</h1>
    <button id="button1">Get Text</button>
    <button id="button2">Get JSON</button>
    <button id="button3">Get API Data</button>
    <br><br>
    <div id="output"></div>
  </div>
  <script src="app.js"></script>
</body>
</html>
```