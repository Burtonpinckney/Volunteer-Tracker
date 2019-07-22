// 1. Initialize Firebase
console.log('AWESOME myDataEntry.js STUFF!');

// Your web app's Firebase configuration
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

// 2. Button for adding volunteers
$("#add-volunteer-btn").on("click", function (event) {
  event.preventDefault();

  // Grabs user input
  var volunteerName = $("#name-input").val().trim();
  var volunteerLocation = $("#city-input").val().trim();
  // var volunteerDuration = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var volunteerDuration = $("#time-input").val().trim();
  var volunteerDate = moment($("#date-input").val().trim(), "MM/DD/YYYY").format("X");

  // Creates local "temporary" object for holding volunteer data
  var newVolunteer = {
    volunteerName,
    volunteerLocation,
    volunteerDuration,
    volunteerDate
  };
localStorage
  // Uploads volunteer data to the database
  database.ref().push(newVolunteer);

  // Logs everything to console
  // console.log(newVolunteer);

  alert("Volunteer Added");

  // Clears all of the text-boxes
  $("#name-input").val("");
  $("#city-input").val("");
  $("#time-input").val("");
  $("#date-input").val("");
});

