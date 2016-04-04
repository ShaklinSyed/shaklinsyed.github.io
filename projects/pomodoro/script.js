var sessionCount = -1;

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
			sessionCount++;
			addTomato();
			console.log(sessionCount,"call adding tomato above");
			
			minutes = Number(sesLen.innerHTML);
		}
		else{
			minutes = Number(breLen.innerHTML);
		}
		seconds = minutes * 60;
		console.log(minutes, seconds);
	}

	function displayTime(){
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
		--seconds;
		min.innerHTML = minutes;
		
		if(seconds % 60 < 10){
			sec.innerHTML = "0" + seconds % 60;
		}
		else{
			sec.innerHTML = seconds % 60;
		}

		// console.log(minutes,seconds);
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


function addTomato(){
	console.log(sessionCount, "Adding tomato");
	console.log("length of tomato classes",$(".tomato").length);
	var tomaElements = $(".tomato");
	// tomato[length].Addclass("active")
}