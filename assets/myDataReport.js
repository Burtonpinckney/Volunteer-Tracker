// my datareport.js  Robert Zuniga
// 1. Initialize Firebase
console.log('AWESOME myreport.html STUFF!');
var count = 0;
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

console.log("Initial Count => ",count);

database.ref().on("child_added", function (childSnapshot) {
    // console.log(childSnapshot.val());
    
    var tName = childSnapshot.val().volunteerName;
    var tLocation = childSnapshot.val().volunteerLocation;
    var tWeather = "sunny";
    var tVolunteerDuration = childSnapshot.val().volunteerDuration;
    var tVolunteerDate = childSnapshot.val().volunteerDate;
    var volunteerDatePretty = moment.unix(tVolunteerDate).format("MM/DD/YYYY");
    
    var newRow = $("<tr>").append(
      $("<td>").text(tName),
      $("<td>").text(tLocation),
      $("<td>").text(tWeather),
      $("<td>").text(tVolunteerDuration),
      $("<td>").text(volunteerDatePretty)
    );
    count++; 
    console.log("count before leaving function=> ",count);
    // // Append the new row to the table
    $("#volunteer-table > tbody").append(newRow);
  
  }); // end database.ref()