$("document").ready(function(){
	console.log("Ready");

	function convertSpaces(str){
		return str.replace(/\s+/gi,"_");
	}
	$("#search").on("click",function(){
		var searchText = $("#searchText").val();
		if($("#resultContainer").has("a").length > 0){
			$("#resultContainer").text(" ");
		}

		if(searchText != ""){
			console.log("Start Searching");
			console.log(searchText);
			// $("body").append("<p> Searchin ... </p>");
			var api = "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="+searchText+"&srwhat=text&prop=links&callback=?";
			
			$.getJSON(api,function(data){
				for(var i=0;i<data.query.search.length;i++){
					console.log(data.query.search[i]);
					var linkUrl = convertSpaces(data.query.search[i].title);

					$("#resultContainer").append("<a href="+"https://en.wikipedia.org/wiki/" + linkUrl +" target='_blank'>" + data.query.search[i].title +"</a>");
					$("#resultContainer").append("<p>" + data.query.search[i].snippet + "</p>");	
				}
			});			
		}

		$("#searchText").val("");
	});
});