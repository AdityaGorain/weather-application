

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt)
{ 
    console.log(searchbox.value);
    if(evt.keyCode === 13)
    {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query)
{
    let api1 = 'http://api.openweathermap.org/data/2.5/weather?q='+query+'&appid=95e0372d62ec5741da3e3bc693bb200f';
    fetch(api1)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}`;
    
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${weather.main.temp}<span>K</span>`;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min}/ ${weather.main.temp_max} k`;

    let weatherL = document.querySelector('.current .weather');
    weatherL.innerText = weather.weather[0].main;
}

