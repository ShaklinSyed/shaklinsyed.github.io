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


	function incDur(num){
		return ++num;
	}

	function decDur(num){
		console.log(num);

		return num >1 ? --num: num;
	}

	function incSes(){
		sesLen.innerHTML = incDur(Number(sesLen.innerHTML));
	}
	
	function decSes(){
		sesLen.innerHTML = decDur(Number(sesLen.innerHTML));
	}
	
	function incBre(){
		breLen.innerHTML = incDur(Number(breLen.innerHTML));
	}

	function decBre(){
		breLen.innerHTML = decDur(Number(breLen.innerHTML));
	}

	sesPlus.addEventListener("click",incSes);
	sesMin.addEventListener("click",decSes);
	brePlus.addEventListener("click",incBre);
	breMin.addEventListener("click",decBre);


	function init(){
		var startTime = new Date(1,1,1,0,0,0);
		var endTime = new Date(1,1,1,0,Number(sesLen.innerHTML),0);

		console.log(startTime,endTime);
	}
	start.addEventListener("click",init);
});