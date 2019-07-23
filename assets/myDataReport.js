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


  // var tWeather = childSnapshot.val().weather.text;
  //   $("<td>").text(tWeather),
      
    $('#volunteer-card').show();
    $('#sortName-card').hide();
    $('#sortCity-card').hide();
    $('#sortWeather-card').hide();
    $('#sortVolunteerTime-card').hide();
    $('#sortDate-card').hide();


database.ref().on("child_added", function (childSnapshot) {
    // console.log(childSnapshot.val());
    
    var tName = childSnapshot.val().name;
    var tCity = childSnapshot.val().city;
    var tWeather = childSnapshot.val().weather.text;
    var icon = '<img src="http:' + childSnapshot.val().weather.icon + '" alt="">'
    var tHoursWorked = childSnapshot.val().hoursWorked;
    var tDate = childSnapshot.val().date;
    var tTimeSubmitted = childSnapshot.val().timeSubmitted;
    var tStartTime = childSnapshot.val().startTime
    var volunteerDatePretty = moment.unix(tDate).format("MM/DD/YYYY");
    
    var newRow = $("<tr>").append(
      $("<td>").text(tName),
      $("<td>").text(tCity),
      $("<td>").html(icon + tWeather),
      $("<td>").text(tHoursWorked),
      $("<td>").text(tDate),
      $("<td>").text(tTimeSubmitted),
      $("<td>").text(tStartTime),
    );
    
    // // Append the new row to the table
    $("#volunteer-table > tbody").append(newRow);
  
  }); // end database.ref()
/////////////////////////////////////////////////
//  Button - Sort Table by Name                //
/////////////////////////////////////////////////
$("#sortName-btn").on("click", function (event) {
  event.preventDefault();
  $("tbody").empty();
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

  ref.orderByChild("name").on("child_added", function (childSnapshot) {
    console.log(childSnapshot.key + " name sorted => " + childSnapshot.val().name + " done");
   
     var tName = childSnapshot.val().name;
    var tCity = childSnapshot.val().city;
    var tWeather = childSnapshot.val().weather.text;
    var icon = '<img src="http:' + childSnapshot.val().weather.icon + '" alt="">'
    var tHoursWorked = childSnapshot.val().hoursWorked;
    var tDate = childSnapshot.val().date;
    var tTimeSubmitted = childSnapshot.val().timeSubmitted;
    var tStartTime = childSnapshot.val().startTime
    var volunteerDatePretty = moment.unix(tDate).format("MM/DD/YYYY");
    
    var newRow = $("<tr>").append(
      $("<td>").text(tName),
      $("<td>").text(tCity),
      $("<td>").html(icon + tWeather),
      $("<td>").text(tHoursWorked),
      $("<td>").text(tDate),
      $("<td>").text(tTimeSubmitted),
      $("<td>").text(tStartTime),
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
  $("tbody").empty();
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

  ref.orderByChild("city").on("child_added", function (childSnapshot) {
    console.log(childSnapshot.key + " name sorted => " + childSnapshot.val().city + " done");
    // $("#info-card").empty();
    var tName = childSnapshot.val().name;
    var tCity = childSnapshot.val().city;
    var tWeather = childSnapshot.val().weather.text;
    var icon = '<img src="http:' + childSnapshot.val().weather.icon + '" alt="">'
    var tHoursWorked = childSnapshot.val().hoursWorked;
    var tDate = childSnapshot.val().date;
    var tTimeSubmitted = childSnapshot.val().timeSubmitted;
    var tStartTime = childSnapshot.val().startTime
    var volunteerDatePretty = moment.unix(tDate).format("MM/DD/YYYY");
    
    var newRow = $("<tr>").append(
      $("<td>").text(tCity),
      $("<td>").text(tName),
      $("<td>").html(icon + tWeather),
      $("<td>").text(tHoursWorked),
      $("<td>").text(tDate),
      $("<td>").text(tTimeSubmitted),
      $("<td>").text(tStartTime),
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
  //  var tName = childSnapshot.val().name;
   // var tCity = childSnapshot.val().city;
   // var tWeather = childSnapshot.val().weather.text;
   // var icon = '<img src="http:' + childSnapshot.val().weather.icon + '" alt="">'
   // var tHoursWorked = childSnapshot.val().hoursWorked;
   // var tDate = childSnapshot.val().date;
   // var tTimeSubmitted = childSnapshot.val().timeSubmitted;
   // var tStartTime = childSnapshot.val().startTime
   // var volunteerDatePretty = moment.unix(tDate).format("MM/DD/YYYY");
    
   // var newRow = $("<tr>").append(
     // $("<td>").text(tName),
      // $("<td>").text(tCity),
      // $("<td>").html(icon + tWeather),
      // $("<td>").text(tHoursWorked),
      // $("<td>").text(tDate),
      // $("<td>").text(tTimeSubmitted),
      // $("<td>").text(tStartTime),
    // );
//     // Append the new row to the table
//     $("#sortCity-table > tbody").append(newRow);
//   });
// }); // end  button
/////////////////////////////////////////////////
//  Button - Sort Table by Volunteer Time      //
/////////////////////////////////////////////////
$("#sortVolunteerTime-btn").on("click", function (event) {
  event.preventDefault();
  $("tbody").empty();
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

  ref.orderByChild("hoursWorked").on("child_added", function (childSnapshot) {
    console.log(childSnapshot.key + " name sorted => " + childSnapshot.val().hoursWorked + " done");
    // $("#info-card").empty();
    var tName = childSnapshot.val().name;
    var tCity = childSnapshot.val().city;
    var tWeather = childSnapshot.val().weather.text;
    var icon = '<img src="http:' + childSnapshot.val().weather.icon + '" alt="">'
    var tHoursWorked = childSnapshot.val().hoursWorked;
    var tDate = childSnapshot.val().date;
    var tTimeSubmitted = childSnapshot.val().timeSubmitted;
    var tStartTime = childSnapshot.val().startTime
    var volunteerDatePretty = moment.unix(tDate).format("MM/DD/YYYY");
    
    var newRow = $("<tr>").append(
      $("<td>").text(tHoursWorked),
      $("<td>").text(tName),
      $("<td>").text(tCity),
      $("<td>").html(icon + tWeather),
      $("<td>").text(tDate),
      $("<td>").text(tTimeSubmitted),
      $("<td>").text(tStartTime),
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
  $("tbody").empty();
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

  ref.orderByChild("date").on("child_added", function (childSnapshot) {
    console.log(childSnapshot.key + " name sorted => " + childSnapshot.val().date + " done");
    // $("#info-card").empty();
    var tName = childSnapshot.val().name;
    var tCity = childSnapshot.val().city;
    var tWeather = childSnapshot.val().weather.text;
    var icon = '<img src="http:' + childSnapshot.val().weather.icon + '" alt="">'
    var tHoursWorked = childSnapshot.val().hoursWorked;
    var tDate = childSnapshot.val().date;
    var tTimeSubmitted = childSnapshot.val().timeSubmitted;
    var tStartTime = childSnapshot.val().startTime
    var volunteerDatePretty = moment.unix(tDate).format("MM/DD/YYYY");
    
    var newRow = $("<tr>").append(
      $("<td>").text(tDate),
      $("<td>").text(tName),
      $("<td>").text(tCity),
      $("<td>").html(icon + tWeather),
      $("<td>").text(tHoursWorked),
      $("<td>").text(tTimeSubmitted),
      $("<td>").text(tStartTime),
    );
    // Append the new row to the table
    $("#sortDate-table > tbody").append(newRow);
  });
}); // end  button

