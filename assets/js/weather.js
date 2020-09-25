const weather = document.querySelector(".js-weather");
const API_KEY= "2bf63ed2b872886add97b99e1c97a906";
const COORDS = "coords";

function getWeather(lat,lng){
fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const teamperature = Math.floor(json.main.temp);
        const place = json.name;
        weather.innerText = `${teamperature}℃ @ ${place}`;
    });
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}



function handleGeoError(){
    console.log("위치정보를 확인 할 수 없습니다.")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}



function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCords)
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}



function init(){
    loadCoords();
}

init();