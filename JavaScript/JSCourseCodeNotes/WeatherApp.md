# WEATHER APP
### JS APP.JS
```javascript
// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init UI
var ui = new UI();

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
city = document.getElementById('city').value;
country = document.getElementById('country').value;
  
  // Change Location
  weather.changeLocation(city, country);

  // Set Location in LS
  
  function getWeather() {
    weather.getWeather()
       .then(msg => {
         if(msg.count >= 1){
           storage.setLocationData(city, country)
           ui.paint(msg)
         } else {
          ui.addError();
          setTimeout(ui.restore, 7000);
          
         } 
       })
      }
      
      console.log(city)
  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

console.log(ui.restore)
//weather.changeLocation('Sydney', 'AU');

function getWeather() {
weather.getWeather()
   .then(results => {
     console.log(results)
     ui.paint(results);
   })
   .catch(err => { 
     if(err instanceof TypeError === true){
      weather.changeLocation('Sydney', 'AU')
      getWeather();
     } else {
        console.log(err)
     }
   });
  }
```
### JS UI.JS
```javascript
class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.temp = document.getElementById('w-temp')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feels-like')
    this.pressure = document.getElementById('w-dewpoint')
    this.wind = document.getElementById('w-wind')
    this.background = document.getElementById('colorChange')
    this.button01 = document.getElementById('buttonChange')
    this.errorMessage = document.getElementById('errorAlert')
  }
  paint(weather) {
    this.location.textContent = `${weather.list[0].name}, ${weather.list[0].sys.country}`;
    this.desc.textContent = `${weather.list[0].weather[0].description}`;
    this.temp.textContent = `${weather.list[0].main.temp}°C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`)
    this.humidity.textContent = `Relative Humidity: ${weather.list[0].main.humidity}%`
    this.feelsLike.textContent = `Feels Like: ${weather.list[0].main.feels_like}°C`
    this.pressure.textContent = `Pressure: ${weather.list[0].main.pressure}hPa`
    this.wind.innerHTML = `Wind Speed: ${weather.list[0].wind.speed}<span style="margin-right:30px">m/s</span>Wind Direction: ${weather.list[0].wind.deg}°`

    if(parseInt(weather.list[0].main.temp) > 20){
      // Remove bg-primary & btn-primary
      this.background.classList.remove('bg-primary');
      this.button01.classList.remove('btn-primary');
       

      // Add bg-warning & btn-warning
      this.background.classList.add('bg-warning');
      this.button01.classList.add('btn-warning');
    } else {}
    
      if(parseInt(weather.list[0].main.temp) < 20){
        // Remove bg-warning & btn-warning
        this.background.classList.remove('bg-warning')
        this.button01.classList.remove('btn-warning');

        this.background.classList.add('bg-primary');
        this.button01.classList.add('btn-primary');
      } else {}

  }

  addError(){
    let errorMessage = document.getElementById('errorAlert');   

    errorMessage.classList.remove('stephendisplayoff');
    errorMessage.classList.add('stephendisplayon');
  }



  restore(){
    let errorMessage = document.getElementById('errorAlert');

    errorMessage.classList.remove('stephendisplayon');
    errorMessage.classList.add('stephendisplayoff');
  }

}

```
### JS WEATHER.JS
```javascript
class Weather {
  constructor(city, country) {
    this.apikey = '3fef72417863740b9ddc71251ae4967e'
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/find?q=${this.city},${this.country}&units=metric&appid=${this.apikey}`)

    const responseData = await response.json();

    return responseData
  }

  // Change Weather Location
  changeLocation(city, country) {
    this.city = city; 
    this.country = country;
    console.log(this.city)
  }  
  
}
```
### JS STORAGE.JS
```javascript
class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = 'Sydney';
    this.defaultCountry = 'AU';

  }

  getLocationData() {
    if(localStorage.getItem('city') === null){
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('country') === null){
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city,
      country: this.country
    }
  }

  setLocationData(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country)
  }
}
```
### CSS STYLE.CSS
```css
.stephendisplayon {
  display: block;
}
.stephendisplayoff {
  display: none;
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
  <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="stephendisplayoff" id="errorAlert">
      <div class="alert alert-dismissible alert-danger mt-3" >
          <strong>Error,</strong> you have either misspelt the location or the city you entered is not listed on our website.
      </div>
    </div>  
    <div class="row">
      <div class="col-md mx-auto text-center bg-primary  mt-3 p-5 rounded" id="colorChange">
        <h1 id="w-location"></h1>
        <h3 class="text-dark" id="w-desc"></h3>
        <h3 id="w-temp"></h3>
        <img id="w-icon">
        <ul id="w-details" class="list-group mt-3">
          <li class="list-group-item" id="w-humidity"></li>
          <li class="list-group-item" id="w-dewpoint"></li>
          <li class="list-group-item" id="w-feels-like"></li>
          <li class="list-group-item" id="w-wind"></li>
        </ul>
        <br>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#locModal" id="buttonChange">
          Change Location
        </button>
      </div>
    </div>
  </div>

    <!-- Modal -->
<div class="modal fade" id="locModal" tabindex="-1" role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="locModalLabel">Choose Location</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="w-form">
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" id="city" class="form-control">
          </div>
          <div class="form-group">
              <label for="country">Country</label>
              <input type="text" id="country" class="form-control">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button id="w-change-btn" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

  <script src="storage.js"></script>
  <script src="weather.js"></script>
  <script src="ui.js"></script>
  <script src="app.js"></script>
</body>
</html>
```