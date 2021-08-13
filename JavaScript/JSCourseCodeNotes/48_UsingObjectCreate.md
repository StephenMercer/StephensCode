# Using Object.create / Lecture 48 Code
### JS
```javascript
const PersonPrototypes = {
  greeting: function() {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
    this.lastName = newLastName;
  }
};

const mary = Object.create(PersonPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

console.log(mary.greeting());

mary.getsMarried('Anne');

console.log(mary.greeting());

const brad = Object.create(PersonPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

console.log(brad);

console.log(brad.greeting());
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Sandbox: Section 5</title>
</head>
<body>
  <h1>Javascript Sandbox: Section 5</h1>
  <script src="app.js"></script>
</body>
</html>
```