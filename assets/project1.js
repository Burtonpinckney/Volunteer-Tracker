var queryURL = "https://api.apixu.com/v1/history.json?key=77525317f1664f6a978165917191907&q=Charlotte&dt=2019-07-18"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response);
    console.log(response.forecast.forecastday[0].hour);
  });