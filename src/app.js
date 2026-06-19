function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature=response.data.temperature.current;
    temperatureElement.innerHTML=math.round(temperature);

}




function searchCity(city){
    //make API call and update the interface
    let apiKey="afb04d23a74e4dcf2d4251cd7t9o980a";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather)
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}



let searchFormElement = document.querySelector("#search-form");
console.log(searchFormElement);
searchFormElement.addEventListener("submit", handleSearchSubmit);