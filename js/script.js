document.addEventListener("DOMContentLoaded",function(){
	let appData = {
		"Calculator" : {
			"description": "A Simplistic Calculator Inspired by Mac Os Calculatore.",
			"languages": "HTML, CSS, Javascript",
			"url": "http://shaklinsyed.github.io/projects/calculator/index.html"
		},
		"Quote Machine": {
			"description": "Inspirational Quotes by great People.",
			"languages": "HTML, CSS, Javascript",
			"url" : "http://shaklinsyed.github.io/projects/quote_generator/index.html"
		},
		"Pomodoro Clock": {
			"description": "Time Tracking made easy.",
			"languages":  "HTML, CSS, Javascript, JQuery",
			"url" : "http://shaklinsyed.github.io/projects/pomodoro/index.html"
		},
		"Tic-Tac-Toe": {
			"description": "Classical game. Play against Computer. Implemented using Min-max Algoirthm.",
			"languages": "HTML, CSS, Javascript, Jquery",
			"url" : "http://shaklinsyed.github.io/projects/ttt/index.html"
		},
		"Twitch API": {
			"description": "A Simple go to app to know the streaming status of your favourite streamer.",
			"languages": "HTML, CSS, Bootstrap, Javascript, JQuery",
			"url" : "http://shaklinsyed.github.io/projects/streamersInfo/index.html"
		},
		"Simon": {
			"description": "No Matter how many times you play - It never gets old, Go ahead give it try to know how far you can go.",
			"languages": "HTML, CSS, Javascript, JQuery",
			"url" : "http://shaklinsyed.github.io/projects/simon/index.html"
		},
		"Tribute Page": {
			"description": "A Chronological order of life lived by our father of Nation - Mahatma Gandhi.",
			"languages": "HTML, CSS, Bootstrap, Javascript",
			"url" : "http://shaklinsyed.github.io/projects/tribute/index.html"
		},
		"Weather App": {
			"description": "Weather forcast made easy. Heading out ? Make sure to check if you need to carry an umbrella.",
			"languages": "HTML, CSS, Javascript, JQuery",
			"url" : "http://shaklinsyed.github.io/projects/weather_app/index.html"
		},
		"Wiki Search": {
			"description": "A Widget to Search Wikipedia.",
			"languages": "HTML, CSS, Javascript, JQuery",
			"url" : "http://shaklinsyed.github.io/projects/wikiSearch/index.html"
		},
		"Snake Game":{
			"description": "An Implementation of Snake Game.",
			"languages":  "HTML, CSS, Javascript, JQuery ",
			"url" : "http://shaklinsyed.github.io/projects/snake/index.html"
		},
		"Catch Tea":{
			"description": "A HTML5 Game.",
			"languages":  "HTML, CSS, Javascript",
			"url" : "http://shaklinsyed.github.io/projects/tea_kettle/index.html"
		},
	}
	$('body').scrollspy({target: "#navbarContent", offset: 50});   
	  // Add smooth scrolling on all links inside the navbar
	$(".navbar-nav a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();
	
		  // Store hash
		  var hash = this.hash;
	
		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		}  // End if
	});

	let createModal = function(appName, imgUrl){
		
		$("#appTitle").text(appName);
		$("#appDescription").text(appData[appName].description);
		$("#appLanguages").text(appData[appName].languages);

		$(".app-logo-cont img").attr("src", imgUrl);

		url = appData[appName].url;
		$('#exampleModal').modal();
	}

	$('.app-cont').on('click', function(event){
		let appName = '',
		imgUrl = '';



		if(event.target.nodeName == 'DIV'){
			if($(event.target).hasClass('app-cont')){
				appName = $(event.target).find('div')[0].innerHTML;
				imgUrl = $(event.target).attr("src");
			}
			else{
				appName = event.target.innerHTML;
				imgUrl = $(event.target).parent().find('img')[0].attr("src");
			}
		}else{
			appName = $(event.target).parent().find('div')[0].innerHTML;
			imgUrl = $(event.target).attr("src")
		}

		console.log(imgUrl);

		createModal(appName, imgUrl);
	});

	$("#appLink").on("click", function(event){
		window.open(url, "_blank");
	});
})

