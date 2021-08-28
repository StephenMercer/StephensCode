# Observer Pattern / Lecture 98 Code
### JS APP.JS
```javascript
function EventObserver(fn) {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`)
  },
  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item){
      item.call();
    });
  }
}

const click = new EventObserver();
console.log(click)

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire()
});



// Click Handler
const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`)
}




const getCurMilliseconds = function() {
  console.log(`Current Seconds: ${new Date().getMilliseconds()}`)
}
```
### APPES6.JS
```javascript
// Changes the observer variable
class EventObserver {
  constructor(){
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn)
    console.log(`You are now subscribed to ${fn.name}`);
    console.log(this.observers)
  

  }
  unsubscribe(fn) {
    console.log(`You are now unsubscribed from ${fn.name}`);
    // Filters out the array in this.observers so fire button has nothing to callback on and hence will not work. Filter is filtering out the function. If statement simply logging what the item is if it is not the function not needed though comment out and try for yourself. 
      this.observers = this.observers.filter(function(item){
    
      if(item !== fn){
        return item
      }
      
    }); 
      let itemArr = []
      itemArr.push(this.observers)
      console.log(itemArr) 
  }
  fire() {
    this.observers.forEach(function(item){
      item.call();
    });
  }
}

console.log(EventObserver)
const click = new EventObserver();
console.log(click)


// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire()
});



// Click Handler
const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`)
}


const getCurMilliseconds = function() {
  console.log(`Current Seconds: ${new Date().getMilliseconds()}`)
}

const getCurMillidseconds = function() {
  console.log(`New Seconds: ${new Date().getMilliseconds()}`)
}


// Regarding Lines 15 & 16 
// WHEN CONSOLE LOGGING (ITEM)
// You are now subscribed to getCurMilliseconds
// ƒ () {
//   console.log(`Current Seconds: ${new Date().             
//   getMilliseconds()}`)}
// You are now unsubscribed from getCurMillidseconds
// ƒ () {
//   console.log(`Current Seconds: ${new Date().
//   getMilliseconds()}`)}

// WHEN CONSOLE LOGGING (FN) (fn is the function parsed in this case its getCurMillidseconds)

// You are now subscribed to getCurMilliseconds
// ƒ () {
//   console.log(`Current Seconds: ${new Date().
//   getMilliseconds()}`)}
// You are now unsubscribed from getCurMillidseconds
// ƒ () {
//   console.log(`New Seconds: ${new Date().
//   getMilliseconds()}`)}

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
  <button class="sub-ms">Subscribe to Milliseconds</button>
  <button class="unsub-ms">Unsubscribe from Milliseconds</button>
  <br><br>
  <button class="sub-s">Subscribe to Seconds</button>
  <button class="unsub-s">Unsubscribe from Seconds</button>
  <br><br>
  <button class="fire">Fire</button>

  <script src="appes6.js"></script>
</body>
</html>
```