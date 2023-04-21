let text = document.getElementById('text');
let m1 = document.getElementById('m1');
let t2 = document.getElementById('t2');
let m2 = document.getElementById('m2');
let t1 = document.getElementById('t1');
let man = document.getElementById('man');
let plant = document.getElementById('plant');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * .3 + 'px';
    m1.style.left = value * 0.3 + 'px';
    t2.style.left = value * -.5 + 'px';
    t2.style.bottom = value * -.5 + 'px';
    // m2.style.left = value * 1.5 + 'px';
    // t1.style.left = value * -1.5 + 'px';
    man.style.bottom = value * -.5 + 'px';
    // plant.style.top = value * 1 + 'px';
}); 
search.addEventListener('click', () => {
    let value = window.scrollY;
    box.style.left = value * -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001 + 'px';
});
document.getElementById("first-location").selectedIndex=1;
var swap=document.querySelector('.swap')

swap.addEventListener("click",()=>{
    swap.classList.toggle('swap-rotation')
    var firstlocation=document.getElementById('first-location')
    var secondlocation=document.getElementById('second-location')
    var value;
    value=secondlocation.value;
    secondlocation.value=firstlocation.value;
    firstlocation.value=value; 
})

        var element = document.getElementById("1");
        element.style.opacity = "0";

        var element = document.getElementById("2");
        element.style.opacity = "0";

        var element = document.getElementById("3");
        element.style.opacity = "0";

        var element = document.getElementById("4");
        element.style.opacity = "0";

        var element = document.getElementById("5");
        element.style.opacity = "0";

        var element = document.getElementById("6");
        element.style.opacity = "0";

        var element = document.getElementById("7");
        element.style.opacity = "0";

        var element = document.getElementById("8");
        element.style.opacity = "0";

        var element = document.getElementById("9");
        element.style.opacity = "0";

        var element = document.getElementById("10");
        element.style.opacity = "0";

        var element = document.getElementById("11");
        element.style.opacity = "0";

        var element = document.getElementById("12");
        element.style.opacity = "0";

        var element = document.getElementById("13");
        element.style.opacity = "0";

        var element = document.getElementById("14");
        element.style.opacity = "0";

        var element = document.getElementById("15");
        element.style.opacity = "0";


search.addEventListener("click",()=>{
    var x = document.getElementById("first-location").selectedIndex;
    var y = document.getElementById("second-location").selectedIndex;

    if(x==1 && y==2 || x==2 && y==1){
        var element = document.getElementById("13");
        element.style.opacity = "1";
    }

    else if(x==1 && y==3 || x==3 && y==1){
        var element = document.getElementById("12");
        element.style.opacity = "1";
    }
    else if(x==1 && y==4|| x==4 && y==1){
        var element = document.getElementById("15");
        element.style.opacity = "1";
    }
    else if(x==1 && y==5 || x==5 && y==1){
        var element = document.getElementById("11");
        element.style.opacity = "1";
    }
    else if(x==1 && y==6 || x==6 && y==1){
        var element = document.getElementById("14");
        element.style.opacity = "1";
    }
    else if(x==2 && y==3 || x==3 && y==2){
        var element = document.getElementById("6");
        element.style.opacity = "1";
    }
    else if(x==2 && y==4 || x==4 && y==2){
        var element = document.getElementById("8");
        element.style.opacity = "1";
    }
    else if(x==2 && y==5 || x==5 && y==2){
        var element = document.getElementById("5");
        element.style.opacity = "1";
    }
    else if(x==2 && y==6 || x==6 && y==2){
        var element = document.getElementById("7");
        element.style.opacity = "1";
    }
    else if(x==3 && y==4 || x==4 && y==3){
        var element = document.getElementById("4");
        element.style.opacity = "1";
    }
    else if(x==3 && y==5 || x==5 && y==3){
        var element = document.getElementById("2");
        element.style.opacity = "1";
    }
    else if(x==3 && y==6 || x==6 && y==3){
        var element = document.getElementById("3");
        element.style.opacity = "1";
    }
    else if(x==4 && y==5 || x==5 && y==4){
        var element = document.getElementById("9");
        element.style.opacity = "1";
    }
    else if(x==4 && y==6 || x==6 && y==4){
        var element = document.getElementById("10");
        element.style.opacity = "1";
    }
    else if(x==5 && y==6 || x==6 && y==5){
        var element = document.getElementById("1");
        element.style.opacity = "1";
    }
    else if((x>0&&y>0)&&x==y){
        alert("Please enter different values")
    }
})

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        showWeatherData(data);
        })

    })
}

function showWeatherData (data){
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    // timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'

    currentWeatherItemsEl.innerHTML = 
    `<div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}%</div>
    </div>
    <div class="weather-item">
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
    </div>
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
    </div>
    
    
    `;

    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    })


    weatherForecastEl.innerHTML = otherDayForcast;
}
