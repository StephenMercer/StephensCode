# Iterators & Generators / Lecture 88 Code
### JS APP.JS
```javascript
// Iterator Example
function nameIterator(names){
  let nextIndex = 0; 

  return {
    next: function() {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false } : {done: true}
    }
  }
}

// Create an array of names 
const namesArr = ['Jack', 'Jill', 'John'];
// Initialize(Init) iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next().value); 
console.log(names.next().value);
console.log(names.next());


console.log('GENERATORS')

// Generator Example
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next()); 
console.log(name.next());
console.log(name.next());
console.log(name.next());

// ID Creator
function* createIds() {
  let index  = 1;

  while(true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log()

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