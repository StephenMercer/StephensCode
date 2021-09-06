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
      console.log()
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
        for (const [key, value] of Object.entries(users)) { console.log(key, value)}
        console.log(users[user.name])
      },
      send: function(message, from, to) {
       
        if(to) {
          // Single user message
          to.recieve(message, from);
          console.log('going through to');
          console.log(to)
        } else {
          // Mass message
          for(key in users) {
            if(users[key] !== from) {
              users[key].recieve(message, from);
              console.log(key)
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
  // sara.send('Hello Brad', brad)
  // jeff.send('Hello Everyone!!!')
  // brad.send('Hello', sara)
  

```
### JS APPES6.JS
```javascript
class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }


  // Send Function first place user passes through
  send(message, to) {
    this.chatroom.send(message, this, to);
  }
  
  recieve(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }

}


const Chatroom = function(){
  let users = {} //User Object

  return {
    register(user){
      users[user.name] = user;
      user.chatroom = this
    },
    send(message, from, to){
      if(to){
        to.recieve(message, from)
      } else {
        for(key in users) {
          if(key !== from.name){
            users[key].recieve(message, from)
            console.log(key)
          }
        }
      }
    }
  }
}

const jonah = new User('Jonah');
const paul = new User('Paul');
const simon = new User('Simon');

const chatroom = new Chatroom()

chatroom.register(jonah)
chatroom.register(paul)
chatroom.register(simon)

console.log(simon)
simon.send('Hello')
jonah.send('Hello Simon', simon)
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