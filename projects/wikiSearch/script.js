$("document").ready(function(){
	console.log("Ready");

	$("#search").on("click",function(){
		var searchText = $("#searchText").val();
		
		if(searchText != ""){
			console.log("Start Searching");
			console.log(searchText);
			$("body").append("<p>Results for : <b>" + searchText + "</b></p>");
			var api = "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="+searchText+"&srwhat=text&prop=links";
			
			$.getJSON(api,function(data){
				console.log(data);
			});			
		}

		$("#searchText").val("");


		


	});
});