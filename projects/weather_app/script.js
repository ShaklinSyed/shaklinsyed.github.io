$(document).ready(function(){
	console.log("Ready");
	var tempInfahren,tempInCel;
	function getData(){
		console.log("Getting Data");
		$("#info").text("Getting Data");
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(pos){
				var lat = pos.coords.latitude;
				var lon = pos.coords.longitude;
				console.log(lat,lon); 
				var apiKey = "e66405a4cc08fa0fad212aa2f354bf17";

				$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + lon  +
				 "&APPID=" + apiKey +"&format=json&callback=?",function(data){
					
					
 				// 	console.log(tempTime.getHours());
					// console.log(tempTime.getMinutes());

					// var parsedData = "\n latitude : " + data.coord.lat+
					// 			 " \n longitude : " + data.coord.lon +
					// 			 " \n country : " + data.sys.country+
					// 			 " \n sunrise : " + data.sys.sunrise+
					// 			 " \n sunset : " + data.sys.sunset  + 
					// 			 " \n Temperature :" + data.main.temp + 
					// 			 " \n Humidity : " + data.main.humidity + 
					// 			 " \n Min Temp : "+ data.main.temp_min +
					// 			 " \n Max Temp : " + data.main.temp_max + 
					// 			 " \n Name : " + data.name;
					// console.log(parsedData);
					// $("#info").text(parsedData);

					var tempInKelvin = data.main.temp;
					tempInCel = tempInKelvin - 273.15;
					tempInfahren = tempInCel * (9/5) + 32;
					console.log("temperature", tempInKelvin, tempInCel,tempInfahren);
					console.log(data.name,data.main.temp,data.weather[0].main,data.weather[0].icon,data.sys.country);
					
					$("#location").text(data.name + " , " + data.sys.country);
					$("#temperature").text(tempInCel+"*C");
					$("#climate").text(data.weather[0].main);
					$("#weather-icon").css("backgroundImage","url(http://openweathermap.org/img/w/"+ data.weather[0].icon + ".png)")
					
					// var tempTime = new Date(data.sys.sunrise * 1000);
					// $("#sun-rise").text("0"+tempTime.getHours() + " : " + tempTime.getMinutes());

					// var tempTime = new Date(data.sys.sunset * 1000);
					// $("#sun-set").text(tempTime.getHours() + " : " + tempTime.getMinutes());			
				});
			});
		}
		else{
			console.log("Your Browser doesnt Support Geo Location");
		}
	}
	getData();

	function converTemp(){
		console.log("clicked");
		var cont = $("#temperature").html();
		console.log(tempInfahren,tempInCel);
		console.log(cont.charAt(cont.length-1));
		if(cont.charAt(cont.length-1) == "C"){
			console.log("Convert to Fahrenheight");
			$("#temperature").text(tempInfahren + "*F");
		}
		else{
			$("#temperature").text(tempInCel + "*C");
		}
		console.log(cont.length);
	}
	$("#temperature").on("click",converTemp);
});