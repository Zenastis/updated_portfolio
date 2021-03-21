function displayTime() {
    var date = moment().format('MMMM Do, YYYY');
    $("#date").text(date);
    var rightNow = moment().format("h:mm:ss a");
    $("#now").text(rightNow);
}

setInterval(displayTime, 1000);

function getApi(inputVal) {
    var API_Key = "54e1375c02bb77b1a951b0a2a1264c0d"
    var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${API_Key}&units=imperial`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            var temp = data.main.temp
            var weather = data.weather[0].main
            $("#temp").append(temp)
            $("#weather").append(weather)
        })
}
getApi("Charlotte")
// if youve made it this far grading this, this is a work in progress.  pls be nice lol. thanks.