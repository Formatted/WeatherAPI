var to_be_run_on_server_response = function(weather_data){
	var rise = new Date(weather_data.sys.sunrise * 1000);
	var settt = new Date(weather_data.sys.sunset * 1000)
  $('#whh').text(weather_data.name + " " + weather_data.main.temp + " " + 
  		weather_data.weather[0].description + " " +
  		"Sunrise: " + rise.getHours() + ":" + rise.getMinutes() + " " +
  		"Sunset: " + settt.getHours() + ":" + settt.getMinutes());
}

  var getTempSF = function() {
  	$('#whh').text("fetching data, plsease stand by...");
  	 $.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e').success(to_be_run_on_server_response);
  }

  var getTempNY = function() {
  	$('#whh').text("fetching data, plsease stand by...");
  	 $.get('http://api.openweathermap.org/data/2.5/weather?q=New%20York&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e').success(to_be_run_on_server_response);
  }

var getTempBP = function() {
  	$('#whh').text("fetching data, plsease stand by...");
  	 $.get('http://api.openweathermap.org/data/2.5/weather?q=Budapest&mode=json&units=metric&APPID=93b03ba103c6cabec96f47a6f650769e').success(to_be_run_on_server_response);
  }

  $("#gtempSF").on("click", getTempSF);
  $("#gtempBP").on("click", getTempBP);
  $("#gtempNY").on("click", getTempNY);

