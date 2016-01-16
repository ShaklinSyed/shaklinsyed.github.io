var current = 0;
var quotes_list = [
	{
		url : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gandhi_smiling.jpg/377px-Gandhi_smiling.jpg",
		quote : "Happiness is when what you think, what you say, and what you do are in harmony.",
		author : "Mahatma Gandhi",
	},
	{
		url : " ",
		quote : "Ardently do today what must be done. Who knows? Tomorrow, death comes.",
		author : "Gautama Buddha",
	},
	{
		url : " ",
		quote : "live the life you love and love the life you live.",
		author : "Bob Marley",
	},
	{
		url : " ",
		quote : "Life is a gift horse in my opinion.",
		author : "J. D. Salinger"
	},
	{
		url : " ",
		quote : "It pays to be obvious, especially if you have a reputation for subtlety.",
		author : "Isaac Asimov",
	},
	{
		url : " ",
		quote : "The world is changing: I feel it in the water, I feel it in the earth, and I smell it in the air.",
		author : "J. R. R. Tolkien",
	},
	{
		url : " ",
		quote : "When the sword is once drawn, the passions of men observe no bounds of moderation.",
		author : "Alexander Hamilton",
	},
	{
		url : " ",
		quote : "It is well that war is so terrible — lest we should grow too fond of it.",
		author : "Robert E. Lee",
	},
	{
		url : " ",
		quote : "Uncertainty and expectation are the joys of life. Security is an insipid thing.",
		author : "William Congreve",
	},
	
];

function getQuote(){
	console.log("getQuote");

	var image = document.getElementById("image");
	var quote = document.getElementById("quote");
	var author = document.getElementById("author");

	image.style.backgroundImage = "url('" + quotes_list[current].url +"')";


	if(quotes_list[current].url == " "){
		image.style.backgroundImage = "";
	}
	
	
	quote.innerHTML = quotes_list[current].quote;
	author.innerHTML = "-" + quotes_list[current].author;

	current++;
	changeTitle();
	
	if(current == quotes_list.length){
		current =0;
	}
}
