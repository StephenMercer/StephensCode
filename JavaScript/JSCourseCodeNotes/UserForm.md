# User Form
### JS APP.JS
```javascript
// Form Blur Event Listener
document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('zip').addEventListener('blur', validateZip)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('phone').addEventListener('blur', validatePhone)

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,18} [a-zA-Z]{2,18}$/;

  if (!re.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{4}(-[0-9]{5})?$/;

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid')
  } else {
    zip.classList.remove('is-invalid')
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid')
  } else {
    email.classList.remove('is-invalid')
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^[0 ]?\d{3}\ ?\d{3}\ ?\d{3}\ ?$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid')
  } else {
    phone.classList.remove('is-invalid')
  }
}

document.getElementById('formSubmit').addEventListener('click', onSubmit)



//Submit form and check if all areas are valid
function onSubmit(e) {
  // DOM SELECT ELEMENTS
  const name01 = document.getElementById('name');
  const zip01 = document.getElementById('zip');
  const email01 = document.getElementById('email');
  const phone01 = document.getElementById('phone');
  const invalid = document.getElementsByClassName('is-invalid');
  const outline = document.getElementsByClassName('form-control');
  const userA = {
    userName: name01.value,
    userZip: zip01.value,
    userEmail: email01.value,
    userPhone: phone01.value,
  }
  console.log(userA)


  if (invalid.length === 0 && outline[0].value !== "") {
    // Store Names in Local Storage

    function storeUserInLS(userA) {
      let users;
      if (localStorage.getItem('User') === null) {
        users = [];
      } else {
        users = JSON.parse(localStorage.getItem('User'));
      }

      console.log(users)

      users.push(userA);

      localStorage.setItem('User', JSON.stringify(users))

    }

    storeUserInLS(userA)

    // Clear Inputs For Loop

    let myList = [];

    for (let x = 0; x < outline.length; x++) {
      myList.push(outline[x].value = "");
    }


  } else {
    Array.from(outline).forEach(item => item.classList.add('is-invalid'))

  }

  console.log(localStorage.getItem('Name'))

  console.log(Array.from(outline))

  e.preventDefault()
}

document.getElementById('formSearch').addEventListener('click', onSearch);

function onSearch(e) {
  // Required Values
  const searchValue = document.getElementById('searchbar').value;
  const searchChange = document.getElementById('searchbar')
  const nameInput = document.getElementById('nameInput');
  const zipInput = document.getElementById('zipInput');
  const emailInput = document.getElementById('emailInput');
  const phoneInput = document.getElementById('phoneInput');
  const cover = document.getElementById('cover');
  const userAlert = document.getElementById('userError'); 

  const storeUsers = JSON.parse(localStorage.getItem('User'));

  console.log(storeUsers)

  let userList = []

  // forEach outputs them all individually thats why they all have an index of 0 because there is only one item in each output, userList them turns them into a array
  storeUsers.forEach(phones => userList.push(phones.userPhone.indexOf(`${searchValue}`)) )

  let i = userList.indexOf(0)

  console.log(userList)
  
  if(userList.indexOf(0) !== -1){
    userAlert.style.display = 'none';
    searchChange.classList.remove('is-invalid')
    nameInput.innerHTML = `<Strong>Name:</Strong> ${storeUsers[i].userName}`
    zipInput.innerHTML = `<Strong>Zip:</Strong> ${storeUsers[i].userZip}`
    emailInput.innerHTML = `<Strong>Email:</Strong> ${storeUsers[i].userEmail}`
    phoneInput.innerHTML = `<Strong>Phone:</Strong> ${storeUsers[i].userPhone}`
    cover.style.display = 'block';
     
  } else {
   cover.style.display = 'none';
   userAlert.style.display = 'block';
   searchChange.classList.add('is-invalid')

  }

  
  
  e.preventDefault()
}


let storenames = JSON.parse(localStorage.getItem('User'))

console.log(storenames[1])

let newList = [];

storenames.forEach(names => newList.push(names.userName.indexOf('')))

console.log(newList.indexOf(0))

```
### HTML
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
   <div class="container">
     <div class="row">
        <div class="col-md-6 mx-auto">
           <h1>User Form</h1>
            <form>
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control gtb egg" id="name" placeholder="Name">
                  <div class="invalid-feedback">
                    Name must be between 2 and 10 charaters
                  </div>
                </div>
                <div class="form-group">
                  <label>Zipcode</label>
                  <input type="text" class="form-control" id="zip" placeholder="Zipcode">
                  <div class="invalid-feedback">
                    Enter a valid zipcode
                  </div>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" id="email" placeholder="Email">
                  <div class="invalid-feedback">
                    Enter a valid email
                  </div>
                </div>
                <div class="form-group">
                  <label>Phone Number</label>
                  <input type="text" class="form-control" id="phone" placeholder="Phone Number">
                  <div class="invalid-feedback">
                    Enter a valid phone
                  </div>
                </div>
                <input type="submit" value="Submit"
                class="btn btn-primary btn-block mb-3" id="formSubmit">
                <div class="form-group">
                  <label><strong>Find User</strong></label>
                  <input type="text" class="form-control" id="searchbar" placeholder="Enter Phone Number">
                  <div class="invalid-feedback">
                    Enter a valid phone Number
                  </div>
                </div>
                <input type="submit" value="Search"
                class="btn btn-primary btn-block" id="formSearch">
                <div class="card mt-3" id="cover" style="display: none">
                  <div class="card-header">
                    <strong>User Information</strong>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="nameInput">Name:</li>
                    <li class="list-group-item" id="zipInput">Zip:</li>
                    <li class="list-group-item" id="emailInput">Email:</li>
                    <li class="list-group-item" id="phoneInput">Phone:</li>
                  </ul>
                </div>
                <div class="alert alert-danger mt-3" role="alert" id="userError" style="display: none;">
                  The user number you have entered is not our system.
                </div>
              </div>
            </form>
        </div>
     </div>
   </div>
  <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    <script src="app.js"></script>
</body>
</html>
```