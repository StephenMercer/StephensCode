# Sub-Classes / Lecture 50 Code
### JS
```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }

}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting()); 

console.log(Customer.getMembershipCost());
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