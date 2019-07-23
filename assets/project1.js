var firebaseConfig = {
    apiKey: "AIzaSyDAbwLtsdY_KEnrGa6aMNrdyh11aSK94f0",
    authDomain: "time-talent-treasure.firebaseapp.com",
    databaseURL: "https://time-talent-treasure.firebaseio.com",
    projectId: "time-talent-treasure",
    storageBucket: "",
    messagingSenderId: "607547578040",
    appId: "1:607547578040:web:d670b674aa277ba5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
var database = firebase.database();
   
var APIkey = "77525317f1664f6a978165917191907";

// var dateStamp = moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Capture Button Click
$("#add-volunteer-btn").on("click", function (event) {

    event.preventDefault();

    var volunteer = {
        name: $("#name-input").val(),
        city: $("#city-input").val(),
        date: $("#date-input").val(),
        hoursWorked: $("#hours-input").val(),
        timeSubmitted: moment().format('MMMM Do YYYY, h:mm:ss a'),
        startTime: $("#time-input").val(),
        weather: {},
    }

    // Clear the textbox when done
    $("#name-input").val("");
    $("#city-input").val("");
    $("#time-input").val("");
    $("#date-input").val("");
    $("hours-input").val("");
    $("#weather").val("");

    var queryURL = "https://api.apixu.com/v1/history.json?key=" + APIkey + "&q=" + volunteer.city + "&dt=" + volunteer.date;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        volunteer.weather = response.forecast.forecastday[0].day.condition;
        console.log(volunteer)
        database.ref().push(volunteer);
       
    });
});







