# Mediator Pattern / Lecture 99 Code
### JS APP.JS
```javascript
const User = function(name) {
this.name = name;
this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
    console.log(this.name)
  },
  recieve: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        // Single user message
        to.recieve(message, from)
      } else {
        // Mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].recieve(message, from);
            console.log(users[key])
          }
        }
      }
    }
  }
}

const brad = new User('Brad')
const jeff = new User('Jeff')
const sara = new User('Sara')

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff', jeff)
sara.send('Hello Brad', brad)
jeff.send('Hello Everyone!!!')

```

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Sandbox: Patterns</title>
</head>
<body>
  <h1>JavaScript Sandbox: Patterns</h1>
  <script src="app.js"></script>
</body>
</html>
```