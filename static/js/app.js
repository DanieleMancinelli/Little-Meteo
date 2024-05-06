var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var wind = document.querySelector('.wind');
var coord = document.querySelector('.coord');
var pressure = document.querySelector('.pressure');
var humidity = document.querySelector('.humidity');
var tempMax = document.querySelector('.temp_max');
var tempMin = document.querySelector('.temp_min');
var icon = document.querySelector('.icon');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var iconImage = data['weather'][0]['icon'];
  var windValue = data['wind']['speed'];
  var coordLatValue = data['coord']['lat'];
  var coordLonValue = data['coord']['lon'];
  var pressureValue = data['main']['pressure'];
  var humidityValue = data['main']['humidity'];
  var tempMaxValue = data['main']['temp_max'];
  var tempMinValue = data['main']['temp_min'];


  main.innerHTML = nameValue;
  desc.innerHTML = "Desc: "+descValue;
  icon.src = 'https://openweathermap.org/img/w/'+iconImage+'.png'
  temp.innerHTML = "Temp: "+tempValue+'°'+', Temp Max: '+tempMaxValue+'°'+', Temp Min: '+tempMinValue+'°';
  wind.innerHTML = 'Wind Speed: '+windValue+' m/s';
  coord.innerHTML = 'Coord (lat and lon): '+coordLatValue+'; '+coordLonValue;
  pressure.innerHTML = 'Pressure: '+pressureValue+' hPa';
  humidity.innerHTML = 'Humidity: '+humidityValue+' %';
  input.value ="";

})

.catch(err => alert("Nome della città inesistente"));
})

fetch('https://api.openweathermap.org/data/2.5/weather?q=Londra&appid=50a7aa80fa492fa92e874d23ad061374&units=metric')
    .then((response) => {
        // Controlla se la richiesta ha avuto successo
        if (!response.ok) {
            throw new Error('Errore durante la richiesta: ' + response.status);
        }

        // Estrai il JSON dalla risposta
        return response.json();
    })
    .then((data) => {
        // Visualizza il JSON nella console
        console.log('Contenuto del JSON:', data);
    })
    .catch((error) => {
        console.error('Si è verificato un errore:', error);
    });