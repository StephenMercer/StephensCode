# ES6 Classes / Lecture 49 Code
### JS
```javascript
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x * y;
  }

};

const mary = new Person('Mary', 'Williams', '11-13-1980');

mary.getsMarried('Loo');

console.log(mary);

console.log(mary.calculateAge())

console.log(Person.addNumbers(7, 9))
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