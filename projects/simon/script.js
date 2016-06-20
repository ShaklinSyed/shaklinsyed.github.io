$("document").ready(function(){
	console.log("Start");

	var util = {
		padNum : function(num){
			if(num <10){
				return "0" + num;
			}
			return num;
		},

		removeBorder : function(id){
			var timeOut = setTimeout(function(){
				$(id).removeClass("border");
			},600);
		},
	};

	function createInterval(i){
		return setTimeout(function(){
					Game.computerTurn(Game.pattern[i-1]);
					// console.log(Game.pattern[i-1], Game.pattern, i-1);
				}, i * 1000);
	}

	var Game = {
		count : 1,
		pattern : [],
		turn : "COMPUTER",
		inter : [],
		mode : "",

		createPattern : function(){
			for(var i=0;i<20;i++){
				this.pattern.push(Math.round(Math.random() * 3)+1);
			}
		},

		play : function(){
			Game.count++;

			if(count == 22){
				alert("You Have Championed the Game");
				reset();
				Game.play();
			}
			$("#count").html(util.padNum(Game.count - 1));

			// $("#count").html(util.padNum(Game.count));
			// Game.computerTurn(Game.pattern[Game.count]);
			
			// Game.turn = "PLAYER";
			for(var i=1;i<Game.count;i++){
				clearTimeout(Game.inter[i]);
			}


			for(var i=1;i< Game.count;i++){
				Game.inter[i] = createInterval(i);
				console.log(i,"interval Created");
			}

			var anotherInterval = setTimeout(function(){
			Game.turn = "PLAYER";
			}, count*1000);
		},

		playTune : function(num){
			if(num == 1){
				var audio = new Audio("simonSound1.mp3");
				audio.play();
			}
			else if(num == 2){
				var audio = new Audio("simonSound2.mp3");
				audio.play();
			}
			else if(num == 3){
				var audio = new Audio("simonSound3.mp3");
				audio.play();
			}
			else if(num == 4){
				var audio = new Audio("simonSound4.mp3");
				audio.play();
			}
		},

		computerTurn : function(num){
			if(num == 1){
				$("#blue").addClass("border");
				Game.playTune(1);
				util.removeBorder("#blue");
			}
			else if(num == 2){
				$("#red").addClass("border");
				Game.playTune(2);
				util.removeBorder("#red");
			}
			else if(num == 3){
				$("#yellow").addClass("border");
				Game.playTune(3);
				util.removeBorder("#yellow");
			}
			else if(num == 4){
				$("#green").addClass("border");
				Game.playTune(4);
				util.removeBorder("#green");
			}
		}
	};

	var result = new Array();
	var noTimesPressed = 0;

	function reset(){
		Game.count = 1;
		Game.pattern.length = 0;
		Game.createPattern();
		noTimesPressed = 0;
		result.length = 0;

		for(var i=0;i<Game.inter.length;i++){
			clearTimeout(Game.inter[i]);
		}
	}

	function checkResult(){
		for(var i=0;i< noTimesPressed;i++){
			if(result[i] == Game.pattern[i]){
				console.log("true");
			}
			
			// console.log(i, "clicked :",  result[i], Game.pattern[i]);

			if(result[i] != Game.pattern[i] && Game.mode == "STRICT"){
				// console.log("false");
				reset();
				var temp  = setTimeout(function(){
					Game.play();
				},1000);
			}

			if(result[i] != Game.pattern[i]){
				// console.log("false");
				Game.count -= 1;
				noTimesPressed = 0;
				result.length = 0;
				$("#count").html("!!");
				var temp  = setTimeout(function(){
					Game.play();
				},1000);
			}

			else if(i == Game.count-2){
				// console.log("back to COMPUTER");
				Game.turn == "COMPUTER";
				noTimesPressed =0;
				result.length = 0;
				Game.play();
			}
		}
	}


	$("#blue").on("click",function(){
		if(Game.turn == "PLAYER"){
			Game.playTune(1);
			++noTimesPressed;
			result.push(1);
			checkResult();
		}
	});

	$("#red").on("click",function(){
		if(Game.turn == "PLAYER"){
			Game.playTune(2);
			++noTimesPressed;
			result.push(2);
			checkResult();

		}
	});

	$("#yellow").on("click",function(){
		if(Game.turn == "PLAYER"){
			Game.playTune(3);
			++noTimesPressed;
			result.push(3);
			checkResult();
		}
	});

	$("#green").on("click",function(){
		if(Game.turn == "PLAYER"){
			Game.playTune(4);
			++noTimesPressed;
			result.push(4);
			checkResult();

		}
	});



	$("#onoff").on("click",function(){
		var orientation = $("#on").css("float");
		if(orientation == "left"){
			$("#on").css("float","right");
		}
		else{
			$("#on").css("float","left");
			$("#count").html("- -");
			$("#pointer").css("background-color","rgb(0, 0, 0)");
			reset();
			Game.turn = "COMPUTER";

		}
		console.log(orientation);
	});

	// Game starts HERE <-------------------------
	Game.createPattern();
	$("#start").on("click",function(){
		var orientation = $("#on").css("float");
		if(orientation == "right"){
			reset();
			Game.play();
		}
	});

	$("#strict").on("click",function(){
		var orientation = $("#on").css("float");
		var pointer = $("#pointer").css("background-color");

		console.log(pointer);
		if(orientation == "right"){
			if(pointer == "rgb(0, 0, 0)"){
				Game.mode = "STRICT";
				$("#pointer").css("background-color","red");
			}
			else{
				Game.mode = "";
				$("#pointer").css("background-color","rgb(0, 0, 0)")
			}

		}
	});
});

