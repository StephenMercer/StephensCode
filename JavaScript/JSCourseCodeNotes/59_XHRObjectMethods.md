# XHR OBJECT METHODS WITH TEXT / Lecture 59
### JS APP.JS
```javascript
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();

  console.log('READYSTATE', xhr.readyState);

  // OPEN
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
    document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
  }


  //Better and New Way
  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState)
    if(this.status === 200) {
      console.log(this.responseText)
    }
  }

  // Old Way

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText)
  //   }
  // }

  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();


  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received 
  // 3: processing request
  // 4: request finished and response is ready


  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}

```
### TEXT
```txt
Some plain text data
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
  <title>Ajax Sandbox</title>
</head>
<body>
  <div class="container">
    <button id="button">Get Data</button>
    <br><br>
    <div id="output"></div>
  </div>
  
  <script src="app.js"></script>
</body>
</html>
```