# Local and Session Storage / Lecture 33 Code
### JS
```javascript
let val;


// // set local storage item
// // localStorage.setItem('name', 'John');
// // localStorage.setItem('age', '30');
// val = localStorage.name;
// val = localStorage

// // set session storage item
// sessionStorage.setItem('name', 'Jess');
// val = sessionStorage

// //remove from local storage 
// //localStorage.removeItem('name');

// //get from storage
// val = localStorage.name;
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
 //localStorage.clear();

document.querySelector('form').addEventListener('submit',
function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');
  
  //console.log(123);
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});


//console.log(val)
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
                  <input type="text" name="task" id="task" value="Walk the Dog">
                  <label for="task">New Task</label>
                </div>
                <input type="submit" value="Add Task" class="btn">
              </form>
            </div>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
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
                <a href="" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item 2
                <a href="" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item 3
                <a href="" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item 4
                <a href="" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item 5
                <a href="" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
            </ul>
            <a href="" class="clear-tasks btn black">Clear Tasks</a>
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