# Constructors / Lecture 44 Code
### JS
```javascript
// Object Literal Old Way

const brad = {
  name: 'Brad',
  age: 30,
};

console.log(brad);
console.log(brad.age)


// Person Constructor New Way

function Person(name, dob/*age, height, job*/) {
  this.name = name;
  // this.age = age;
  // this.height = height;
  // this.job = job;
  // console.log(this)
  this.birthday = new Date(dob);
  this.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  console.log(diff)
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970)  ;
  }
}
//console.log(this)


const James = new Person('James', '9-10-1981');
const John = new Person('John', 21, '5ft9', 'Tennis Coach');

console.log(James.calculateAge())

//this.alert(John.name);
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