function weatherColorChange() {
    switch (localStorage.getItem("background Image Number")) {
        case "0":
            return "#C0C0C0";
            break;
    
        case "1":
            return "yellow";
            break;
    
        case "2":
            return "aqua";   
            break;
    
        case "3":
            return "#ff7f00";  
            break;
                
        default:
            return "violet"   
            break;
    }
}


const API_KEY = "73cc609087430f3d17e88bfdb73e5e54";

function GeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(URL).then(response => response.json()).then(data => {
        const weatherDiv = document.querySelector("#weather");
        const city = document.querySelector("#weather h1:first-child");
        const weather = document.querySelector("#weather h1:last-child");
        
        city.innerText = `${data.name} / ${data.main.temp}℃`;
        weather.innerText = `${data.weather[0].description}`;

        weatherDiv.style.color = weatherColorChange();

    })
}
function GeoFail(params) {
    alert("Error! Can't Find You.")
}


navigator.geolocation.getCurrentPosition(GeoOk, GeoFail);