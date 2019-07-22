var APIkey = "77525317f1664f6a978165917191907";

var city = "";
var date = "";



// Capture Button Click
// $("#add-volunteer-btn").on("click", function (event) {

//     event.preventDefault();

// var volunteer = {
//     city: $("#city-input").val(),
//     date: $("#date-input").val(),
//     hour: $("#time-input").val(),
//     weather: $("#forecast.forecastday[0].hour);").val(),
// }
// console.log(weather)

// Clear the textbox when done
// $("#name-input").val("");
// $("#location-input").val("");
// $("#time-input").val("");
// $("#date-input").val("");
// $("#weather").val("");



var queryURL = "https://api.apixu.com/v1/history.json?key=" + APIkey + "&q=" + city + "&dt=" + date;

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response.forecast.forecastday[0].hour);


    $(".weather").html("Weather" + response.forecast.forecastday[0].hour);

});


});







