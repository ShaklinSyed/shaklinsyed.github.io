function changeTitle(){
	var quote = document.getElementById("quote").innerHTML;
	var title = document.getElementsByTagName("title")[0].innerHTML;
	
	document.getElementsByTagName("title")[0].innerHTML = quote + "Quotes";
}

document.addEventListener("DOMContentLoaded",function(){
	console.log("Ready");

	var refresh = document.getElementById("refresh");

	refresh.addEventListener("click",getQuote);

	function init(){
		getQuote();
		changeTitle();
	}
	
	init();
});