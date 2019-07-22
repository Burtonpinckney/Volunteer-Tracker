var APIkey = "77525317f1664f6a978165917191907";

var dateStamp = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// Capture Button Click
$("#add-volunteer-btn").on("click", function (event) {

    event.preventDefault();

    var volunteer = {
        city: $("#city-input").val(),
        date: $("#date-input").val(),
        hour: $("#time-input").val(),
        weather: {},
    }

    // Clear the textbox when done
    $("#name-input").val("");
    $("#location-input").val("");
    $("#time-input").val("");
    $("#date-input").val("");
    $("#weather").val("");

    var queryURL = "https://api.apixu.com/v1/history.json?key=" + APIkey + "&q=" + volunteer.city + "&dt=" + volunteer.date;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        volunteer.weather = response.forecast.forecastday[0].hour[0].condition;
        console.log(volunteer.weather);
        var text = response.forecast.forecastday[0].hour[0].condition.text
        var icon = '<img src="http:' + response.forecast.forecastday[0].hour[0].condition.icon + '" alt="">'
        $('#weather').html(text + " " + icon)

    });
});







