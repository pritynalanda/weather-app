function getWeather(){

let city=document.getElementById("city").value;

fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=92e04eda92470d1891c2c94a6c28a442&units=metric")

.then(response=>response.json())

.then(data=>{

let temp=data.main.temp;
let humidity=data.main.humidity;
let weather=data.weather[0].description;

document.getElementById("result").innerHTML=
"Temperature: "+temp+"°C <br>"+
"Humidity: "+humidity+"% <br>"+
"Weather: "+weather;

})

}
