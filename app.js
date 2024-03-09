const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "2130c7664c2f743f72fb3de0faef5007";
const searchInput = document.querySelector(".search-input input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".condition img");
const fun = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  console.log(response);
  let data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".wind-speed span").innerHTML =
    data.wind.speed + " km/h";
  document.querySelector(".humi span").innerHTML = data.main.humidity + " %";

  if (data.weather[0].main === "Clouds") {
    weatherImg.src = "clouds.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherImg.src = "drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherImg.src = "mist.png";
  } else if (data.weather[0].main === "Snow") {
    weatherImg.src = "snow.png";
  } else if (data.weather[0].main === "Rain") {
    weatherImg.src = "rain.png";
  } else if (data.weather[0].main === "Clear") {
    weatherImg.src = "clear.png";
  } else {
    weatherImg.src = "mist.png";
  }
};
searchBtn.addEventListener("click", () => {
  if (searchInput.value === "undefined") {
    document.querySelector(".box").style.display = "none";
  }
  fun(searchInput.value);
});
