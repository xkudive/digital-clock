const clockHours = document.getElementById("hours");
const clockMinutes = document.getElementById("minutes");
const clockDate = document.getElementById("clockDate");
const clockMonth = document.getElementById("month");
const clockWeekday = document.getElementById("weekday");
const temperature = document.getElementById("degrees");

const monthArr = ['JAN', "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const weekdayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateDate(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let month = date.getMonth();
    let clockDay = date.getDate();
    let weekday = date.getDay();

    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;
    clockHours.innerText = `${hours}`;
    clockMinutes.innerText = `${minutes}`;
    clockDate.innerText = `${clockDay}`;
    clockMonth.innerText = `${monthArr[month]}`;
    clockWeekday.innerText = `${weekdayArr[weekday]}`;
    setTimeout(updateDate, 1000);
}
updateDate();

const city = "jizzakh";
const requestURL = "https://api.api-ninjas.com/v1/weather?city=" + city;

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open(method, url);
        request.responseType = 'json';
        request.onload = () => {
            resolve(request.response);
        }
        request.onerror = () => {
            reject(request.response);
        }
        request.setRequestHeader('X-Api-Key', 'YmWrDWN0kuFjY6pBLYmmzQ==RENFUiIQppZxPwqj');
        request.send();
    })
}

sendRequest("GET", requestURL)
.then(data => temperature.innerText = data.temp)
.catch(err => console.error(err));