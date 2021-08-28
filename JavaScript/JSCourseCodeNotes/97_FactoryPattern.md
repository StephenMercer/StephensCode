# Factory Pattern / Lecture 97 Code
### JS APP.JS
```javascript
function MemberFactory() {
  this.createMember = function(name, type){
    let member;

    if(type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }

    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5'
}

const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15'
}

const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25'
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Kate Orange', 'super'));
members.push(factory.createMember('James Smith', 'standard'))




console.log(members)



members.forEach(member => member.define());
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