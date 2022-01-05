// Fetch url for.


let fetchWeather = (input) => {
    const myKey = "0ba5dd2a59f58e4a08d4fba1649ffc65";

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`
    )

        .then((response) => response.json())
        .then((data) => displayWeather(data))
}

// console.log(data);

// return data;



// Display weather on website.

displayWeather = function (data) {
    const name = data.name;
    const temp_max = data.main.temp_max;
    const temp_min = data.main.temp_min;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    console.log(name, temp_max, temp_min, description, humidity)
    document.querySelector(".city").innerText = "Weather in: " + name;
    document.querySelector(".temp_max").innerText = "High Temp: " + temp_max + "℉";
    document.querySelector(".temp_min").innerText = "Low Temp: " + temp_min + "℉";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
},

    search = function () {
        fetchWeather(document.querySelector(".search-bar").value)
    }



// Add event listener for search button.
document
    .querySelector(".search button")
    .addEventListener("click", function () {
        search();
    });

// Add event listener for enter key.
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        search();
    }
});


// https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=0ba5dd2a59f58e4a08d4fba1649ffc65