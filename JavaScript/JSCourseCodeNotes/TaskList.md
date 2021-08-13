# Task List
### JS
```javascript
// DEFINE UI VARS
const forms = document.querySelector('#task-form');
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const task = document.querySelector('.collection-item')


//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
  // Dom Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  forms.addEventListener('submit', addTask);
  // Remove Task Event
  taskList.addEventListener('click', removeTask);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks);
  // Filter Tasks Event
  filter.addEventListener('keyup', filterTasks);
};

// Get Tasks from LS
function getTasks() {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
// Create li element
const li = document.createElement('li')
// Add Class
li.className = 'collection-item';
// Create text node and append to li
li.appendChild(document.createTextNode(task));
// Create new link element
const link = document.createElement('a');
// Add class
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class = "fa fa-remove"></i>';
// Append the link to li
li.appendChild(link);
//Append li to ul
taskList.appendChild(li)
  });
}


// Add Task
function addTask(e) {
if(taskInput.value === '') {
  alert('Add a task');
}
if(taskInput.value !== ''){
// Create li element
const li = document.createElement('li')
// Add Class
li.className = 'collection-item';
// Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
// Create new link element
const link = document.createElement('a');
// Add class
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class = "fa fa-remove"></i>';
// Append the link to li
li.appendChild(link);

//Append li to ul
taskList.appendChild(li)

// Store in LS
storeTaskInLocalStorage(taskInput.value)

// Clear input
taskInput.value = '';

e.preventDefault();
}

};
// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// document.body.addEventListener('click', removeTask)

// function removeTask(x) {
//   if(x.target.classList.contains('fa-remove')){
//       x.target.parentElement.parentElement.remove();
//     };
  
// }

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you Sure?')){
    e.target.parentElement.parentElement.remove()
    
    // Remove from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);

    }
  }
}
   // Remove from LS
   function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
 }


// Clear Task
function clearTasks() {
  //taskList.innerHTML = '';

  // Faster
  if(confirm('Are you Sure?')){
    while(taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
  clearTasksFromLocalStorage();
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}


// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <title>Document</title>
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
         <h5 id="task-title">Tasks </h5>
         <div class="input-field col s12">
          <input type="text" name="filter" id="filter">
          <label for="filter">Filter Tasks</label>
        </div>
        <ul class="collection"></ul>
        <a href="#" class="clear-tasks btn black">Clear Tasks</a>
      </div>
    </div>
  </div>
  <script
  src="https://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
  <script src = "app.js"></script>
</body>
</html>
```