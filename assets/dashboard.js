
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        
    });
    }





var getWeather = function(data){
    var apiURL = "api.openweathermap.org/data/2.5/weather?lat= " +lat+ "&lon=" +long+ "&appid=62c4ff14764826079fb651d1fb610323"
        
    fetch(apiURL).then(function(response) {

    if(response.ok){
            response.json().then(function(data) {
                displayWeather(data , location);
            });
        }else {
            alert("Error :" + response.statusText);
        };
    });
    console.log(getWeather);
};
var displayWeather = function(weather) {
    
}
 var cityInputE1 = document.querySelector("#city");
var formSubmitHandler =function(event) {
    event.preventDefault();

    var cityname = cityInputE1.value.trim();
    if (cityname) {
        getWeather(cityname);
        cityInputE1.value = "";

    } else {
        alert("Please enter a city name");
    }
    var saveCity;
    console.log(event.city.cityname);
}

var saveCity = function(){
    localStorage.setItem("city", JSON.stringify(city));
} 

cityInputE1.addEventListener("submit", formSubmitHandler);

