var current = 0;
var quotes_list = [
	{
		url : "",
		quote : "Happiness is when what you think, what you say, and what you do are in harmony.",
		author : "Mahatma Gandhi",
	},
	{
		url : "",
		quote : "Keep calm, and learn to code",
		author : "broda",
	},
	{
		url : "",
		quote : "live the life you love and love the life you live.",
		author : "Bob Marley",
	},
	{

	},
	{

	},
	{

	},
	
];

function getQuote(){
	console.log("getQuote");

	// var image = document.getElementById("image");
	var quote = document.getElementById("quote");
	var author = document.getElementById("author");


	// if(quotes_list[current].url == ""){
	// 	image.style.borderRadius = "50%";
	// }
	//image.style = quotes_list[current].url;
	quote.innerHTML = quotes_list[current].quote;
	author.innerHTML = "-" + quotes_list[current].author;

	current++;
	changeTitle();
}
