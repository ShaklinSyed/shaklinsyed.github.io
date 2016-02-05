document.addEventListener("DOMContentLoaded",function(){
	console.log("Ready");

	var refresh = document.getElementById("refresh");

	refresh.addEventListener("click",getQuote);
	
	function init(){
		getQuote();
	}
	
	init();
});