# Object Literals / Lecture 14 Code
### JS
```javascript

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'Fl',
  },
  getBirthYear: function(){
    return 2021 - this.age; // just age doesn't work
  }
};

let val;

val = person;
// Get specific value
val = person.firstName; //recommended
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();
console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'James', age: 21},
  {name: 'Amy', age: 34},
];

for (let i = 1; i < people.length; i++) {
  console.log(people[i].name)
}

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