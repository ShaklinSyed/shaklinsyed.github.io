var current = Math.round(Math.random() * 10);
var quotes_list = [
	{
		quote : "Happiness is when what you think, what you say, and what you do are in harmony.",
		author : "Mahatma Gandhi",
	},
	{
		quote : "Ardently do today what must be done. Who knows? Tomorrow, death comes.",
		author : "Gautama Buddha",
	},
	{
		quote : "Live the life you love and love the life you live.",
		author : "Bob Marley",
	},
	{
		quote : "Life is a gift horse in my opinion.",
		author : "J. D. Salinger"
	},
	{
		quote : "It pays to be obvious, especially if you have a reputation for subtlety.",
		author : "Isaac Asimov",
	},
	{
		quote : "The world is changing: I feel it in the water, I feel it in the earth, and I smell it in the air.",
		author : "J. R. R. Tolkien",
	},
	{
		quote : "When the sword is once drawn, the passions of men observe no bounds of moderation.",
		author : "Alexander Hamilton",
	},
	{
		quote : "It is well that war is so terrible — lest we should grow too fond of it.",
		author : "Robert E. Lee",
	},
	{
		quote : "Uncertainty and expectation are the joys of life. Security is an insipid thing.",
		author : "William Congreve",
	},
	{
		quote : "Love what you do and do what you love",
		author: "Steve Jobs",
	},
	{
		quote : "The Journey of one thousand miles begins with one step",
		author : "Lao Tsu"
	},
	{
		quote : "Life is like riding a bicycle. To keep your balance you must keep moving.",
		author : "Albert-Einstein",
	},
	{
		quote : "I never think of the future. It comes soon enough.",
		author : "Albert-Einstein",
	},
	{
		quote : "Only a life lived for others is a life worthwhile.",
		author : "Albert-Einstein",
	},
	{
		quote : "Perfection of means and confusion of goals seem—in my opinion—to characterize our age.",
		author : "Albert-Einstein",
	},
	{
		quote : "we are busy that we may have leisure, and make war that we may live in peace.",
		author : "Aristotle",
	},
	
];

function composeTweet(){
	var twtbtn = document.getElementById("twtbtn");
	twtbtn.href = "https://twitter.com/intent/tweet?text=" + 
					quotes_list[current].quote + "-"+
					 quotes_list[current].author + "&hastags=" +
					 "quotes" + "&url=" + "http://goo.gl/TaEpJm" ;
}

function getQuote(){
	console.log("getQuote");
	
	var quote = document.getElementById("quote");
	var author = document.getElementById("author");
	

	composeTweet();
	
	quote.innerHTML = quotes_list[current].quote;
	author.innerHTML = "-" + quotes_list[current].author;

	current++;
	console.log(current,quotes_list.length);
	if(current == quotes_list.length){
		current = 0;
	}
}

