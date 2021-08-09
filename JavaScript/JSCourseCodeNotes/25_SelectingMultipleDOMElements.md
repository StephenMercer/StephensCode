# Selecting Multiple DOM Elements / Lecture 25 Code
### JS
```javascript
// document.getElementsByClassName();

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[1].style.color = 'blue';  
items[4].innerText = 'Hello';
items[3].textContent = 'Hiiiiiiiiiiiii'

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// document.getElementsByTagName();
let lis = document.getElementsByTagName('li')

console.log(lis);
//console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Goodbye';

//Convert HTML Collect into Array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index){
    console.log(li.innerText)
    li.textContent = `${index} : Hello`;
});

console.log(lis);

//document.querySelectorAll
const items01 = document.querySelectorAll('ul.collection li.collection-item');

items01.forEach(function(item, index){
  console.log(item.innerText)
  item.textContent = `${index} : HeYYYYYYY`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');


  liOdd.forEach(function(odd, index){
  console.log(index + ' : ' + odd)
  odd.style.background = 'green';
  });

liEven.forEach(function(even, index){
  console.log(index + ' : ' + even)
  even.style.background = 'red';
  });

  for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#444';
  };



console.log(liOdd)
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <title>Task List</title>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <div id="main" class="card">
          <div class="card-content">
            <span class="card-title">Task List</span>
            <div class="row">
              <form id="task-form">
                <div class="input-field col s12">
                  <input type="text" name="task" id="task">
                  <label for="task">New Task</label>
                </div>
                <input type="submit" value="Add Task" class="btn">
              </form>
            </div>
          </div>
          <div class="card-action">
            <h5 id="task-title">Tasks</h5>
            <div class="input-field col s12">
              <input type="text" name="filter" id="filter">
              <label for="filter">Filter Tasks</label>
            </div>
           <div class="collection-item"></div>
            <ul class="collection">
              <li class="collection-item">
                List Item 1
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item 2
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item 3
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item 4
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item 5
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
            </ul>
            <a href="#" class="clear-tasks btn black">Clear Tasks</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
  <script src='app.js'></script>
</body>
</html>
```