# Track Calorie Stephen Version
### JS APP.JS
```javascript
// Storage Controller
const StoreCtrl = (function(){
  return {
    storeItem: function(){
      let items;
      console.log(localStorage.getItem('Items'))
      // .getItem is a function of ls not one I made
      if(localStorage.getItem('Items') === null){
        items = []
      } else {
        items = JSON.parse(localStorage.getItem('Items'));
      }

      console.log(items)

      localStorage.setItem('Items', JSON.stringify(items));
    },
    getStorage: function(){
      this.storeItem()
      return JSON.parse(localStorage.getItem('Items'))
   },
   addStorage: function(item){
     items = JSON.parse(localStorage.getItem('Items'));
     
     items.push(item)
     localStorage.setItem('Items', JSON.stringify(items));
   },
   updateItem: function(item){
    items = JSON.parse(localStorage.getItem('Items'));
     
    for(let i = 0; i < items.length; i++) {
      if(items[i].id === item.id) {
        items.splice(i, 1, item);
      }
      
    }
     //items.splice(item.id, 1, item)
     localStorage.setItem('Items', JSON.stringify(items));
   },
   deleteItem: function(id){
    items = JSON.parse(localStorage.getItem('Items'));
     
    for(let i = 0; i < items.length; i++) {
      if(items[i].id === id) {
        items.splice(i, 1);
      }
      
    }
    localStorage.setItem('Items', JSON.stringify(items));
   },
   clearItems: function(){
     items = JSON.parse(localStorage.getItem('Items'));
     for(i = 0; i <= items.length + 1; i++){
      items.pop()
    }
    console.log(items)
     localStorage.setItem('Items', JSON.stringify(items));
   }

  }
})();



// Item Controller 


const ItemCtrl = (function(){
// Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }  

  // Data Structure / State
  const data = {
    // items: [
    //   // {id: 0, name: 'Steak Dinner', calories: 1200},
    //   // {id: 1, name: 'Cookie', calories: 400},
    //   // {id: 2, name: 'Eggs', calories: 300 },
    // ],
    items: StoreCtrl.getStorage(),
    currentItem: null,
    totalCalories: 0
  }
 
  // Public Methods
  return {
    getItems: function(){
      return data.items 
    }, 
    addItem: function(name, calories){
      let Id;  
      // Create ID
      // Before any ids are created the length will be zero
      if(data.items.length > 0){
        // Finding Previous id ---> data.items[data.items.length - 1] same as data.items[0].id = the item with an id of 0.
        // Adding on one to id ---> .id + 1;
        Id = data.items[data.items.length - 1].id + 1;
      } else {
        Id = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(Id, name, calories)
      
      // Add to items array
      data.items.push(newItem)

      return newItem;
    },
    deleteItem: function(id){
      console.log(data.items.indexOf(id))
      for(let i = 0; i < data.items.length; i++) {
        if(data.items[i].id === id) {
          data.items.splice(i, 1);
        }
        
      }
      
    },
    deleteAll: function(){
      for(i = 0; i <= data.items.length + 1; i++){
        data.items.pop()
      }
      console.log(data.items)
      
    },
    updateItem: function(name, calories){
      console.log(data)
      data.currentItem.name = name;
      data.currentItem.calories = Number(calories);
      
    },
    getItemById: function(id){
      let found = null;
      // Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function(indexOfItem){
      data.currentItem = data.items[indexOfItem];
      console.log(data.currentItem) 
    },
    getCurrentItem: function(){
      return data.currentItem
    },
    getTotalCalories: function(){
      let total = 0
      console.log(data.items)
      if(data.items.length > 0){
      data.items.forEach(function(item){
        total += item.calories;
      });} else {

      };

      // Set total cal in data structure
      data.totalCalories = total;

      // Return total
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();  


//UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
    listItem: '.collection-item',
    changeText: '.thisclass'
  }
  
   // Public Methods
  return {

    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return{
        name: document.querySelector(UISelectors.itemNameInput),
        calories: document.querySelector(UISelectors.itemCaloriesInput),
      }
    },
 
    addListItem: function(item){
      // Alternative Method :Show the list
      // document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li')
      // Add class
      li.className = 'collection-item'
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`
      //Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('afterbegin', li)  
    },
    updateListItem: function(item){
      document.getElementById(`item-${item.id}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`
    },
    updateError: function(){
      const addClass = document.querySelectorAll(UISelectors.changeText);
      for(i = 0; i < addClass.length; i++){
        addClass[i].classList.add("helper-text", "red-text");
        addClass[i].style.display = 'block';
      }
      document.querySelector(UISelectors.itemNameInput).className = 'invalid';
      document.querySelector(UISelectors.itemCaloriesInput).className = 'invalid';
    },
    clearUpdateError: function(){
      const addClass = document.querySelectorAll(UISelectors.changeText);
      for(i = 0; i < addClass.length; i++){
        addClass[i].classList.remove("helper-text", "red-text");
        addClass[i].style.display = 'none';
      }
      document.querySelector(UISelectors.itemNameInput).classList.remove('invalid')
      document.querySelector(UISelectors.itemCaloriesInput).classList.remove('invalid')
    },
      revealList: function(){
      // Show the List
      console.log('is it running')
      document.querySelector('#item-list').style.display = 'block';
    },
    deleteAll: function(){
      const elem = document.querySelector(UISelectors.itemList);
      const nodes = document.querySelectorAll(UISelectors.listItem)
      nodes.forEach(node => elem.removeChild(node))
    },
    // Alternative way of clearing input
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      // console.log('hello')
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories 
      UICtrl.showEditState()
    },
    getCurrentValues: function(){
      return {
        name: ItemCtrl.getCurrentItem().name,
        calories: ItemCtrl.getCurrentItem().calories
      }
    },
    // Hide Ul list bar
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    removeElement: function(id){
      const elem = document.querySelector(UISelectors.itemList);
      // remove single child node by selecting element id
      const node = document.getElementById(`item-${id}`)
      elem.removeChild(node)
    },
    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function(){
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function(){
      return UISelectors;
    }
  }
})();  



//App Controller
const App = (function(ItemCtrl, UICtrl){
  
  // Load event Listeners
  const loadEventListeners = function(){
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    
    // Disable submit on enter
    document.addEventListener('keypress', function(e){
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
      }
    })
    
    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditSubmit);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
    // Item Delete
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDelete);
    // Go Back
    document.querySelector(UISelectors.backBtn).addEventListener('click', itemBack);
    // Clear All
    document.querySelector(UISelectors.clearBtn).addEventListener('click', itemClear)
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // Get form input from UI Controller 
    const input = UICtrl.getItemInput();
    //Check for name and calorie input
    
    if(input.name.value !== '' && input.calories.value !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name.value, input.calories.value)
      // Add item to UI list
      UICtrl.addListItem(newItem);
      console.log(newItem)
      // Add item to storage
      StoreCtrl.addStorage(newItem)
      UICtrl.revealList();

      // Get Total Calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);
      // Clear Fields
      // (function clearInput(){
      //   input.name.value = '';
      //   input.calories.value = '';
      // })();
      
      // Alternative way of clearing input
      UICtrl.clearInput();
      
      
    }
  console.log(input.name)
    
    e.preventDefault();
  }

  // Update item submit
  const itemUpdateSubmit = function(e){
    // Get item inputs to observe inputs
    const input = UICtrl.getItemInput();
    // Get input before updates are made
    const currentInput = UICtrl.getCurrentValues();
    // Make if statemant concering if any changed were made
    if(input.name.value !== currentInput.name || parseInt(input.calories.value) !== currentInput.calories) {
      // Clear Previous Notices
      UICtrl.clearUpdateError();
      // Update List
      ItemCtrl.updateItem(input.name.value, input.calories.value);
      // Need to get updated list
      const item = ItemCtrl.getCurrentItem();
      console.log(item)
      // Update list in ui
      UICtrl.updateListItem(item);
      // Update list to storage
      StoreCtrl.updateItem(item);
      UICtrl.clearEditState();
      // Update Calorie Counter
      const updatedCalories = ItemCtrl.getTotalCalories()
      UICtrl.showTotalCalories(updatedCalories);
    } else {
      UICtrl.updateError();
      
    }
    e.preventDefault();
  }

  const itemDelete = function(e){
    // Clear Update error
    UICtrl.clearUpdateError();
    // get current item id
    const currentId = ItemCtrl.getCurrentItem().id
    console.log(currentId)
    // delete item from list
    ItemCtrl.deleteItem(currentId);
    // delete item from UI
    UICtrl.removeElement(currentId);
    // delete item from storage
    StoreCtrl.deleteItem(currentId)
    // update calorie counter
    const calories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(calories)
    
    //Clear ul line when length = 0
    const items = ItemCtrl.getItems();
    if(items.length === 0){
      UICtrl.hideList(); 
      console.log('hello')
      } else {
      // Populate list with items
      UICtrl.populateItemList(items);
      UICtrl.revealList();
      console.log('goodbye')
      }
      UICtrl.clearEditState();
    e.preventDefault();
  }
  const itemBack = function(e){
    // clear update error
    UICtrl.clearUpdateError();
    // remove edit state
    UICtrl.clearEditState();

    e.preventDefault();
  }

  // Click Item Edit
  const itemEditSubmit = function(e){
    if(e.target.classList.contains('edit-item')){
      // Get list item id (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id; 

      // Break into an array
      const listIdArr = listId.split('-');
      console.log(listIdArr)

      // Get the actual id
      const id = parseInt(listIdArr[1])

      // Get Item
      const itemToEdit = ItemCtrl.getItemById(id);

      const indexOfItem = ItemCtrl.getItems().indexOf(itemToEdit);
      
      console.log(indexOfItem)
      // Set Current Item
      ItemCtrl.setCurrentItem(indexOfItem); 

      // Add item to form
      UICtrl.addItemToForm()
    }

    e.preventDefault()
  }

  const itemClear = function(e){
    //clear update error
    UICtrl.clearUpdateError();
    // delete all from item list
    ItemCtrl.deleteAll();
    // delete all from UI
    UICtrl.deleteAll();
    // delete from ls
    StoreCtrl.clearItems();
    // update new total calories
    const calories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(calories)
    // hide the ul line
    const items = ItemCtrl.getItems();
    if(items.length === 0){
      UICtrl.hideList(); 
      console.log('hello')
      } else {
      
      }
      UICtrl.clearEditState();
      
    e.preventDefault();
  }

  // Public Methods
  return {
    init: function(){
      // define local storage
      StoreCtrl.storeItem();
      // Get items from local storage
      const storageItems = StoreCtrl.getStorage();
      // Clear edit State / set initial state
      UICtrl.clearEditState();
      // Hide Ul bar for asethetic reasons
      if(storageItems.length === 0){
      UICtrl.hideList(); 
      console.log('hello')
      } else {
      // Populate list with items
      UICtrl.populateItemList(storageItems);
      UICtrl.revealList();
      console.log('goodbye')
      }

      // Get Total Calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);
      
      // Load event listeners
      loadEventListeners();
      
    }
  }
  
})(ItemCtrl, UICtrl);

// Initialize App
App.init();
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> 
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <title>Track Calorie | Meal & Calorie Tracker</title>
</head>
<body>
  <!-- Navbar -->
  <nav>
    <div class="nav-wrapper blue">
      <div class="container">
        <a href="#" class="brand-logo center">Track Calorie</a>
        <ul class="right">
          <li><a href="#" class="clear-btn btn blue lighten-3">Clear All</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <br>
  <div class="container">
    <!-- Form Card -->
    <div class="card">
      <div class="card-content">
        <span class="card-title">Add Meal / Food Items</span>
        <form class="col">
          <div class="row">
            <div class="input-field col s6">
              <input type="text" placeholder="Add Item" id="item-name">
              <label for="item-name">Meal</label>
              <span class="thisclass" style="display: none;">Please make a change.</span>  
            </div>
            <div class="input-field col s6">
              <input type="number" placeholder="Add Calories" id="item-calories">
              <label for="item-calories">Calories</label>
              <span class="thisclass" style="display: none;">Please make a change.</span> 
            </div>
            <!-- Buttons -->
            <button class="add-btn btn blue darken-3"><i class="fa fa-plus"></i> Add Meal</button>
            <button class="update-btn btn orange"><i class="fa fa-pencil-square-o"></i> Update Meal</button>
            <button class="delete-btn btn red"><i class="fa fa-remove"></i> Delete Meal</button>
            <button class="back-btn btn grey pull-right"><i class="fa fa-chevron-circle-left"></i> Back</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Calorie Count -->
    <h3 class="center-align">Total Calories: <span class="total-calories">0</span></h3>
    <!-- Item List -->
    <ul id="item-list" class="collection">
      <!-- <li class="collection-item" id="item-0">
        <strong>Steak Dinner: </strong> <em>1200 Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>
      <li class="collection-item" id="item-0">
        <strong>Cookie: </strong> <em>400 Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>
      <li class="collection-item" id="item-0">
        <strong>Eggs: </strong> <em>300 Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>  -->
    </ul>
  </div>  
  <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> 
  <script src="app.js"></script>
</body>
</html>
```