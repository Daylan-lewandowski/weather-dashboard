





var getWeather = function(city){
    var apiURL = "api.openweathermap.org/data/2.5/weather?q=London,us&mode=xml&appid=62c4ff14764826079fb651d1fb610323"
        
    fetch(apiURL).then(function(response) {

    if(response.ok){
            response.json().then(function(data) {
                displayWeather(data);
            });
        }else {
            alert("Error :" + response.statusText);
        };
    });
};

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

getWeather();