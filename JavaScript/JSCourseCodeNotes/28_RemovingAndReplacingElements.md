# Removing and Replacing Elements / Lecture 28 Code
### JS
```javascript
// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task Lisk'));

// Get the old Heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);
// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstli = document.querySelector('li:first-child');
const link = firstli.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;






console.log(val)
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