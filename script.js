// Asosiy o'zgaruvchilar va API sozlamalari
const apikey = "SIZNING_API_KALITINGIZ_SHU_YERGA_YOZILADI";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather ?units=metric&q=";
// HTML elementlarini JS dagi o'zgaruvchilarga bog'lash
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// Tugma bosilganda ishga tushadigan hodisa (Event Listener)
searchBtn.addEventListener("click", () => { checkWeather(searchBox.value); });
2 // Ob-havo ma'lumotlarini olish uchun asinxron funksiya
 async function checkWeather(city) {
// Tarmoqqa so'rov yuborish va javobni kutish   
5
const response = await fetch(apiUrl + city + '&appid=${apiKey}');
// Xatolikni tekshirish (404 topilmadi holati)
if (response.status == 404) {
document.querySelector(".error").style.display = "block";
document.querySelector(".weather").style.display = "none";
} else {
// Ma'lumot to'g'ri kelsa, uni JSON shaklida o'qib olish
const data = await response.json();
// Keyingi qadamda ekranni shu ma'lumotlar bilan yangilaymiz
updateUI (data);
}
}

// Olingan ma'lumotlarni HTML elementlarga joylash
function updateUI(data) {
document.querySelector(".city").innerHTML = data.name;
// Haroratni yaxlitlab ekranga chiqarish
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/soat";
// Ob-havo holatiga qarab tegishli rasmni tanlash updateWeather Icon(data.weather[0].main);
// Muvaffaqiyatli natijani ko'rsatish va xatolikni yashirish
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
}



// Rasmlarni almashtirish uchun maxsus funksiya
function updateWeatherIcon(weatherCondition) {
  if (weatherCondition === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (weatherCondition === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (weatherCondition === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (weatherCondition === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (weatherCondition === "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}
