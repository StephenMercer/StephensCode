# Prototypal Inheritance / Lecture 47 Code
### JS
```javascript
// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

// Greeting
Person.prototype.greeting = function(){
return `Hello ${this.firstName} ${this.lastName}!`;

};

const person1 = new Person('John', 'Doe');

console.log(person1.greeting())

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
};

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer() constructor
Customer.prototype.constructor = Customer;


// Create Customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName} Welcome to our Company!`
}


console.log(customer1.greeting());
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