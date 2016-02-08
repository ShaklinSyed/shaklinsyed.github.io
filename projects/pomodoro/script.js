document.addEventListener("DOMContentLoaded",function(){
	console.log("Ready");

	var start = document.getElementById("start");
	var pause = document.getElementById("pause");
	var reset = document.getElementById("reset");

	var sesLen = document.getElementById("sesLen");
	var sesPlus = document.getElementById("sesPlus");
	var sesMin = document.getElementById("sesMin");

	var breLen = document.getElementById("breLen");
	var brePlus = document.getElementById("brePlus");
	var breMin = document.getElementById("breMin");

	var min = document.getElementById("min");
	var sec = document.getElementById("sec");

	var sesInfo = document.getElementById("sesInfo");

	function incDur(num){
		return ++num;
	}

	function decDur(num){
		console.log(num);

		return num >1 ? --num: num;
	}

	function incSes(){
		if(!timeOut){
			console.log(timeOut);
			sesLen.innerHTML = incDur(Number(sesLen.innerHTML));
			min.innerHTML = sesLen.innerHTML;
		}
	}
	
	function decSes(){
		if(!timeOut){
			console.log(timeOut);
			sesLen.innerHTML = decDur(Number(sesLen.innerHTML));
			min.innerHTML = sesLen.innerHTML;
		}
	}
	
	function incBre(){
		if(!timeOut){
			console.log(timeOut);
			breLen.innerHTML = incDur(Number(breLen.innerHTML));
		}
	}

	function decBre(){
		if(!timeOut){
			console.log(timeOut);
			breLen.innerHTML = decDur(Number(breLen.innerHTML));
		}
	}

	sesPlus.addEventListener("click",incSes);
	sesMin.addEventListener("click",decSes);
	brePlus.addEventListener("click",incBre);
	breMin.addEventListener("click",decBre);

	var minutes, seconds;

	function setTimeInfo(){
		if(sesInfo.innerHTML == "Session"){
			minutes = Number(sesLen.innerHTML);
		}
		else{
			minutes = Number(breLen.innerHTML);
		}

		if(minutes > 1){
			// if(sec.innerHTML != 0){
			// 	seconds = minutes * 60 - (60 - Number(sec.innerHTML));
			// }
			// else{
			// 	seconds = minutes * 60 ;
			// }
			seconds = minutes * 60 ;
			--minutes;
		}
		else if(minutes == 1){
			seconds = 59;
			minutes = 0;
		}
		// else{
		// 	if(sec.innerHTML != 0){
		// 		seconds = 60 - (60 - Number(sec.innerHTML));
		// 	}
		// 	else{
		// 		minutes = 0;
		// 		seconds = 59;
		// 	}
		// }
		console.log(minutes, seconds);
	}

	// function callBreak(){
	// 	minutes = Number(breLen.innerHTML);
	// 	seconds = (minutes * 60) - 1;
	// }
	function displayTime(){
		--seconds;

		if(minutes == 0 && seconds == 0){
			if(sesInfo.innerHTML == "Session"){
				sesInfo.innerHTML ="Break";
				setTimeInfo();
			}
			else{
				sesInfo.innerHTML = "Session";
				setTimeInfo();
			}
		}

		if(seconds % 60 == 0){
			--minutes;
		}
		
		min.innerHTML = minutes;
		
		if(seconds % 60 < 10){
			sec.innerHTML = "0" + seconds % 60;
		}
		else{
			sec.innerHTML = seconds % 60;
		}

		console.log(minutes,seconds);
	}

	var timeOut;

	function startTimer(){
		setTimeInfo();
		timeOut = setInterval(displayTime,1000);
	}

	function pauseTimer(){
		clearInterval(timeOut);
		timeOut = false;
		console.log(timeOut);
	}

	function resetTimer(){
		pauseTimer();
		sesInfo.innerHTML = "Session";
		min.innerHTML = sesLen.innerHTML;
		sec.innerHTML = "00";
	}
	start.addEventListener("click",startTimer);
	// pause.addEventListener("click",pauseTimer);
	reset.addEventListener("click",resetTimer);
});