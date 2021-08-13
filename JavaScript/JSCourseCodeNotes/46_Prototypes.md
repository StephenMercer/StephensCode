# Prototypes / Lecture 46 Code
### JS
```javascript

//Object.prototype        object literals
//Person.prototype         constructor

function Person(firstName, lastName, dob/*age, height, job*/) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  // const diff = Date.now() - this.birthday.getTime();
  // console.log(diff)
  // const ageDate = new Date(diff);
  // return Math.abs(ageDate.getUTCFullYear() - 1970)  ;
  // }
}


// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  console.log(diff)
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970)  ;
}

//Gets Married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}


const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(john);

console.log(john.getFullName());

console.log(mary);

console.log(mary.calculateAge());

console.log(mary.getFullName());

mary.getsMarried('Loo');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('lastName'));
console.log(mary.hasOwnProperty('calculateAge'));

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