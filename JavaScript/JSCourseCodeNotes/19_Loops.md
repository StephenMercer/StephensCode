# Loops / Lecture 19 Code
### JS
```javascript
// FOR LOOP

for(let i = 0; i <= 10; i++){
  
  if(i === 2){
  console.log(`My favourite number is ${i}`);
  } else {
    console.log(`Number ${i}`);
  }
}

for( let t = 0; t <= 10; t++){
  if(t === 2){
    console.log('My favourite number is ' + t );
    continue;
  }
  if(t > 5){
    console.log('Stop the loop');
    break;
  }
  console.log(`Number ${t}`);
}

// WHILE LOOP

console.log('WHILE')

let g = 0;

while(g < 10){
  console.log('Number ' + g);
  g++;
}

// DO WHILE RUN 1 NUMBER NO MATTER 100

console.log('DO WHILE')

 let k = 0;

 do {
   console.log('Number ' + k);
   k++;
 }

 while(k < 10);


 // Loop Through Array
 // For loop

 const cars = ['Ford', 'Chevy', 'Honda', 'Toyota', 'Subaru', 'Lexus'];
   //console.log(cars)
 for( let q = 0; q < cars.length; q++) {
    console.log(cars[q])
 }

 //while loop

 console.log('WHILE LOOP')

let m = 0;

while(m < cars.length){
  console.log('Car Brand: ' + cars[m])
  m++;
}

//do while

console.log('DO WHILE')

let p =0;

do {
  console.log(`Car Brand ${cars[p]}`)
  p++;
}

while(p < cars.length);

// For Each
console.log('FOR EACH')

cars.forEach(function(car, index, array){
  console.log(index + ' : ' + car);
  console.log(array)
});

// MAP

console.log('MAP')
const users = [
  {id: 1, Name: 'John'},
  {id: 2, Name: 'Sara'},
  {id: 3, Name: 'Karen'},
  {id: 4, Name: 'Steve'}
];

const ids = users.map(function(user){
  return user.Name;
});

console.log(ids);

// FOR IN LOOP

console.log('FOR IN LOOP')

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
}

for(let x in user){
  console.log(`${x} : ${user[x]}`)
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