$("document").ready(function(){
	console.log("Ready My Lord");

	$("#sesPlus").on("click",incSes);
	$("#sesMin").on("click",decSes);

	$("#brePlus").on("click",incBre);
	$("#breMin").on("click",decBre);

	$("#start").on("click",startTimer);
	$("#pause").on("click",pauseTimer);
	$("#reset").on("click",resetTimer);

	//Event Listerners for Increasing/Decreasing Session Length and Break Length
	function incSes(){
		var num = $(".sesLen").html();
		$(".sesLen").html(padZeros(++num));
	}

	function decSes(){
		var num = $(".sesLen").html();

		if(num > 1){
			$(".sesLen").html(padZeros(--num));
		}
	}

	function incBre(){
		var num = $("#breLen").html();

		$(".breLen").html(padZeros(++num));
	}

	function decBre(){
		var num = $("#breLen").html();

		if(num > 1){
			$(".breLen").html(padZeros(--num));
		}
	}

	var min,
		sec,
		time,
		inter,
		defaultMin,
		status,
		audio = new Audio("assets/tone.mp3");

	function displayTime(){
		if(time > 0){
			--time;
		}
		else{
			if(status == "ses"){
				status = "Break !";
				$("#sesInfo").html(status);
				audio.play();
				addTomato();
				time = $("#breLen").html() * 60;
			}
			else{
				status = "Session";
				audio.play();
				$("#sesInfo").html(status);
				time = defaultMin * 60;
			}
		}

		min = Math.floor(time / 60);
		sec = time % 60;

		$("#min").html(padZeros(min));
		$("#sec").html(padZeros(sec));
	}

	function startTimer(){
		$("#sesLen").removeClass("sesLen");
		$("#min").removeClass("sesLen");
		$("#breLen").removeClass("breLen")

		$("#sesInfo").html("Session");
		status = "ses";

		if(!time || time == 0){
			min = $("#min").html();
			defaultMin = min;
			time = min * 60;
		}
		inter = setInterval(displayTime,1000);
	}

	function pauseTimer(){
		if(inter){
			$("#sesInfo").html("Paused !!");
		}

		clearInterval(inter);
		inter = false;
	}

	function resetTimer(){
		$("#sesInfo").html("Session");
		clearInterval(inter);
		inter =false;
		
		time =0;

		$("#sesLen").addClass("sesLen");
		$("#min").addClass("sesLen");
		$("#breLen").addClass("breLen");
		
		$(".sesLen").html(defaultMin);
		$("#sec").html("00");
	}

	var tomatoCount = $(".tomato").length - 1;
	function addTomato(){
		$(".tomato").eq(tomatoCount).addClass("active");
		--tomatoCount;
	}

});