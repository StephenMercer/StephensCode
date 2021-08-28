# Module & Revealing Module Pattern / Lecture 95 Code
### JS APP.JS
```javascript
//IIFE Function
(function(){
  console.log('hello world')
}())



// Basic Structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

const UICtrl = (function(){
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();
console.log(UICtrl.text)
//UICtrl.changeText()

// REVEALING MODULE PATTERN
const ItemCtrl = (function(){
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added....');
  } 

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name:'John'});
ItemCtrl.add({id: 2, name:'James'});
ItemCtrl.add({id: 3, name:'Jill'});
ItemCtrl.add({id: 4, name:'Jay'});

let ItemArr = [];

for(i = 1; i < 5; i++){
   ItemArr.push(ItemCtrl.get(i))
}

console.log(ItemArr)

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