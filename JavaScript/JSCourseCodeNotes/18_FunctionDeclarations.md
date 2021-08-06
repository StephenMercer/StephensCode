# Function Declarations / Lecture 18 Code
### JS
```javascript
// Function Declarations

function greet(firstName = 'John', lastName = 'Lennon'){
  // if(typeof firstName === 'undefined'){ firstName = 'John'}  //es5
  // if(typeof lastName === 'undefined'){ lastName = 'Lennon'} //es5
  console.log('Hello');
  return 'Hello my name is ' + firstName + ' ' + lastName;
}

console.log(greet('Johnny', 'Appleseed'))


// Function Expression

const square = function(x){
  return x*x
};

console.log(square(8));

// IMMIDIATLY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
(function(firstName = 'Timmy', lastName = 'Twoshoe', Age = 300){
  console.log('Hello my name is ' + firstName + ' ' + lastName + ' and I am ' + Age + ' Years old.');
})();

// Property Methods 
//When an object is put inside a function its called a method

const todo = {
  add: function(){
   console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  },
  delete: function(){
    console.log('Delete Todo...');
  }
}

todo.add();
todo.edit(22);
todo.delete();
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Sandbox: Section 2</title>
</head>
<body>
  <h1>JavaScript Sandbox: Section 2</h1>
  <div id="listhere"></div>
  <div class="list2"></div>
  <div class="list2"></div>

</body>
<script src="app.js"></script>
</html>

```