# Singleton Pattern / Lecture 96 Code
### JS APP.JS
```javascript
const Singleton = (function(){
  let instance;

  function createInstance() {
    const object = new Object({name:'John'})
    return object;
  }

  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();  
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA)
console.log(instanceA === instanceB)

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