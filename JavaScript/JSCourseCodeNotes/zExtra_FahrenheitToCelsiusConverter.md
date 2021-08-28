# Fahrenheit to Celsius Converter
### JS APP.JS
```javascript
class Farienhient {
  constructor(){
    this.farVal = document.getElementById('fahrenheit')
  }
  
  // Getter
  get Celsius() {
    return this.toCelsius();
  }
  
  // Method
  toCelsius(){
    return (this.farVal.value - 32) * 5/9
  }
  
}

const click = new Farienhient()

console.log(click.farVal)

document.querySelector('#toCelsius').addEventListener('click', function() {
   // Get Parent
  const Celsius = document.getElementById('celsius')
  if(Celsius.children.length === 0) {
  // Create Div
  const h1 = document.createElement('h1')
  // Add id
  h1.setAttribute('id','selectMe')
  // Add Text
  h1.appendChild(document.createTextNode(`${parseFloat(click.Celsius).toFixed(2)}°C`))
  // Insert Element
  Celsius.insertBefore(h1, null)
  } else {
    const celSelec = document.getElementById('selectMe')
    celSelec.textContent = `${parseFloat(click.Celsius).toFixed(2)}°C`
  }
})

console.log(click.Celsius)
//console.log(Celsius.children.length)


// console.log((57 - 32) * 5/9)

//parseFloat(num).toFixed(2);
```

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
  <title>Farienhient to Celsius</title>

</head>
<body>
  <div class="container">
    <div class="row">
     <h3>Fahrenheit to Celsius Converter</h1>
     <div class="twelve columns">
       <input type="number" id="fahrenheit" placeholder="Fahrenheit to Celcius...">
       <input type="submit" id="toCelsius" value="Submit">
     </div>
     <div class="twelve columns" id="celsius">
       
     </div>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
```