# Event Bubbling and Delegation / Lecture 32 Code
### JS
```javascript
// // EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
// console.log('card-title')
// });

// let cardContent = document.querySelector('.card-content');

// cardContent.addEventListener('click', function(){
// console.log('card-content')
// });

// document.querySelector('.card').addEventListener('click', function(){
// console.log('card')
// });

// document.querySelector('.s12').addEventListener('click', function(){
// console.log('s12')
// });

// document.querySelector('.row').addEventListener('click', function(){
//   console.log('row')
//   });

// EVENT DELEGATION

// const deleteItem = document.querySelector('.delete-item');

// deleteItem.addEventListener('click', delItem);

const removeli = document.querySelectorAll('li.collection-item')



document.body.addEventListener('click', delItem);

function delItem(e){
  console.log('delete');

  // if(e.target.classList[1] === 'fa-remove'){
  //   console.log(e.target.parentElement);
  // };
 
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log(e.target.parentElement)
    e.target.parentElement.parentElement.remove();
  }
  
  // Don't do this method
  
    //   for (i = 0; i < removeli.length; i++){
    //     console.log(removeli)
    //     removeli[i].remove()
    // };
  e.preventDefault();
 };
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