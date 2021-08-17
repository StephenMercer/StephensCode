# Working with Ajax and JSON / Lecture 60
### JS
```javascript
document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      //console.log(this.responseText)

      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

// Load Customers

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200) {
      //console.log(this.responseText)

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customers){
        output += `
        <ul>
          <li>ID: ${customers.id}</li>
          <li>Name: ${customers.name}</li>
          <li>Company: ${customers.company}</li>
          <li>Phone: ${customers.phone}</li>
        </ul>
        `;
      });

    

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}

```
### JSON Customer
```json
{
  "id": 1,
  "name": "John Doe",
  "company": "123 Designs",
  "phone": "444-555-6666"
}

```
### JSON Customers
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "company": "123 Designs",
    "phone": "444-555-6666"
  },
  {
    "id": 2,
    "name": "Kate Etchwood",
    "company": "Etchwood Consultants",
    "phone": "777-764-9999"
  },
  {
    "id": 3,
    "name": "James Raven",
    "company": "Mazdan Architechture",
    "phone": "111-554-3333"
  }
]
```
### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
  <title>Ajax Sandbox</title>
</head>
<body>
  <div class="container">
    <button id="button1">Get Customer</button>
    <button id="button2">Get Customers</button>
    <br><br>
    <h1>Customer</h1>
    <div id="customer"></div>
    <h1>Customers</h1>
    <div id="customers"></div>
  </div>

  <script src="app.js"></script>
</body>
</html>
```