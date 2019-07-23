console.log('AWESOME myDataReport.js STUFF!');
////////////////////////////////////////////////
//             Firebase configuration         //
////////////////////////////////////////////////
var firebaseConfig = {
  apiKey: "AIzaSyDAbwLtsdY_KEnrGa6aMNrdyh11aSK94f0",
  authDomain: "time-talent-treasure.firebaseapp.com",
  databaseURL: "https://time-talent-treasure.firebaseio.com",
  projectId: "time-talent-treasure",
  storageBucket: "",
  messagingSenderId: "607547578040",
  appId: "1:607547578040:web:d670b674aa277ba5"
};
////////////////////////////////////////////////
// Initialize Firebase                        //
////////////////////////////////////////////////
firebase.initializeApp(firebaseConfig);
////////////////////////////////////////////////
//       convenience variable database        //
////////////////////////////////////////////////
var database = firebase.database();
/////////////////////////////////////////////////
//  Volunteer Summary Table on data_report.html//
/////////////////////////////////////////////////
database.ref().on("child_added", function (childSnapshot) {

  // var tWeather = childSnapshot.val().weather.text;
  //   $("<td>").text(tWeather),
      
    $('#volunteer-card').show();
    $('#sortName-card').hide();
    $('#sortCity-card').hide();
    $('#sortWeather-card').hide();
    $('#sortVolunteerTime-card').hide();
    $('#sortDate-card').hide();

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
        
    // // Append the new row to the table
    $("#volunteer-table > tbody").append(newRow);
  
  }); // end database.ref()
/////////////////////////////////////////////////
//  Button - Sort Table by Name                //
/////////////////////////////////////////////////
$("#sortName-btn").on("click", function (event) {
  event.preventDefault();
 // Show sortName Div...Hide the Rest // 
  $('#volunteer-card').hide();
  $('#sortName-card').show();
  $('#sortCity-card').hide();
  $('#sortWeather-card').hide();
  $('#sortVolunteerTime-card').hide();
  $('#sortDate-card').hide();
  // reference for sorting in Firebase database
  // https://firebase.google.com/docs/reference/js/firebase.database.Reference
  var ref = firebase.database().ref();

  ref.orderByChild("volunteerName").on("child_added", function (snapshot) {
    console.log(snapshot.key + " name sorted => " + snapshot.val().volunteerName + " done");
    // $("#info-card").empty();
    var vName = snapshot.val().volunteerName;
    var vLocation = snapshot.val().volunteerLocation;
    var vDuration = snapshot.val().volunteerDuration;
    var vDate = snapshot.val().volunteerDate;
    var vDatePretty = moment.unix(vDate).format("MM/DD/YYYY");
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(vName),
      $("<td>").text(vLocation),
      $("<td>").text("snowy"),
      $("<td>").text(vDuration),
      $("<td>").text(vDatePretty)
    );
    // // Append the new row to the table
    $("#sortName-table > tbody").append(newRow);
  });
}); // end  button 
/////////////////////////////////////////////////
//  Button - Sort Table by City              //
/////////////////////////////////////////////////
$("#sortCity-btn").on("click", function (event) {
  event.preventDefault();
 // Show sortName Div...Hide the Rest // 
 $('#volunteer-card').hide();
 $('#sortName-card').hide();
 $('#sortCity-card').show();
 $('#sortWeather-card').hide();
 $('#sortVolunteerTime-card').hide();
 $('#sortDate-card').hide();
  // reference for sorting in Firebase database
  // https://firebase.google.com/docs/reference/js/firebase.database.Reference
  var ref = firebase.database().ref();

  ref.orderByChild("volunteerLocation").on("child_added", function (snapshot) {
    console.log(snapshot.key + " name sorted => " + snapshot.val().volunteerLocation + " done");
    // $("#info-card").empty();
    var vName = snapshot.val().volunteerName;
    var vLocation = snapshot.val().volunteerLocation;
    var vDuration = snapshot.val().volunteerDuration;
    var vDate = snapshot.val().volunteerDate;
    var vDatePretty = moment.unix(vDate).format("MM/DD/YYYY");

    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(vLocation),
      $("<td>").text(vName),
      $("<td>").text("snowy"),
      $("<td>").text(vDuration),
      $("<td>").text(vDatePretty)
    );
    // Append the new row to the table
    $("#sortCity-table > tbody").append(newRow);
  });
}); // end  button
/////////////////////////////////////////////////
//  Button - Sort Table by Weather             //
/////////////////////////////////////////////////
// $("#sortWeather-btn").on("click", function (event) {
//   event.preventDefault();
//  // Show sortName Div...Hide the Rest // 
//  $('#volunteer-card').hide();
//  $('#sortName-card').hide();
//  $('#sortCity-card').hide();
//  $('#sortWeather-card').show();
//  $('#sortVolunteerTime-card').hide();
//  $('#sortDate-card').hide();
//   // reference for sorting in Firebase database
//   // https://firebase.google.com/docs/reference/js/firebase.database.Reference
//   var ref = firebase.database().ref();

//   ref.orderByChild("volunteerWeather").on("child_added", function (snapshot) {
//     console.log(snapshot.key + " name sorted => " + snapshot.val().volunteerWeather + " done");
//     // $("#info-card").empty();
//     var vName = snapshot.val().volunteerName;
//     var vLocation = snapshot.val().volunteerLocation;
//     var vDuration = snapshot.val().volunteerDuration;
//     var vDate = snapshot.val().volunteerDate;
//     var vDatePretty = moment.unix(vDate).format("MM/DD/YYYY");

//     // Create the new row
//     var newRow = $("<tr>").append(
//       $("<td>").text(vLocation),
//       $("<td>").text(vName),
//       $("<td>").text("snowy"),
//       $("<td>").text(vDuration),
//       $("<td>").text(vDatePretty)
//     );
//     // Append the new row to the table
//     $("#sortCity-table > tbody").append(newRow);
//   });
// }); // end  button
/////////////////////////////////////////////////
//  Button - Sort Table by Volunteer Time      //
/////////////////////////////////////////////////
$("#sortVolunteerTime-btn").on("click", function (event) {
  event.preventDefault();
 // Show sortName Div...Hide the Rest // 
 $('#volunteer-card').hide();
 $('#sortName-card').hide();
 $('#sortCity-card').hide();
 $('#sortWeather-card').hide();
 $('#sortVolunteerTime-card').show();
 $('#sortDate-card').hide();
  // reference for sorting in Firebase database
  // https://firebase.google.com/docs/reference/js/firebase.database.Reference
  var ref = firebase.database().ref();

  ref.orderByChild("volunteerDuration").on("child_added", function (snapshot) {
    console.log(snapshot.key + " name sorted => " + snapshot.val().volunteerDuration + " done");
    // $("#info-card").empty();
    var vName = snapshot.val().volunteerName;
    var vLocation = snapshot.val().volunteerLocation;
    var vDuration = snapshot.val().volunteerDuration;
    var vDate = snapshot.val().volunteerDate;
    var vDatePretty = moment.unix(vDate).format("MM/DD/YYYY");

    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(vDuration),
      $("<td>").text(vName),
      $("<td>").text(vLocation),
      $("<td>").text("snowy"),
      $("<td>").text(vDatePretty)
    );
    // Append the new row to the table
    $("#sortVolunteerTime-table > tbody").append(newRow);
  });
}); // end  button

/////////////////////////////////////////////////
//  Button - Sort Table by Date               //
/////////////////////////////////////////////////
$("#sortDate-btn").on("click", function (event) {
  event.preventDefault();
 // Show sortName Div...Hide the Rest // 
 $('#volunteer-card').hide();
 $('#sortName-card').hide();
 $('#sortCity-card').hide();
 $('#sortWeather-card').hide();
 $('#sortVolunteerTime-card').hide();
 $('#sortDate-card').show();
  // reference for sorting in Firebase database
  // https://firebase.google.com/docs/reference/js/firebase.database.Reference
  var ref = firebase.database().ref();

  ref.orderByChild("volunteerDate").on("child_added", function (snapshot) {
    console.log(snapshot.key + " name sorted => " + snapshot.val().volunteerDate + " done");
    // $("#info-card").empty();
    var vName = snapshot.val().volunteerName;
    var vLocation = snapshot.val().volunteerLocation;
    var vDuration = snapshot.val().volunteerDuration;
    var vDate = snapshot.val().volunteerDate;
    var vDatePretty = moment.unix(vDate).format("MM/DD/YYYY");

    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(vDatePretty),
      $("<td>").text(vName),
      $("<td>").text(vLocation),
      $("<td>").text("snowy"),
      $("<td>").text(vDuration),
    );
    // Append the new row to the table
    $("#sortDate-table > tbody").append(newRow);
  });
}); // end  button













