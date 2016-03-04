var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","syndicate","riotgames","summit1g","ogamingsc2"];
var urls = [];
//Makes an array of objects with channelName and url for those channelNames
channels.forEach(makeUrl);


function makeUrl(channelName,index){
  var url = "https://api.twitch.tv/kraken/streams/"+ channelName +"?callback=?";
  var obj = {};
  obj.channelName = channelName;
  obj.url = url;
  urls.push(obj);
}

$("document").ready(function(){
	urls.forEach(getData);
});

function getData(element){
  console.log(element.url);
   $.getJSON(element.url, function(data){
    getData(data,element.channelName);
   
  if(data.stream == null){
    console.log(data.stream,element.channelName);
    console.log("Offline");
    console.log(element.channelName);   
    var str = "<div class='row node online'><div class='col-xs-2 col-md-2'><div class='stream-icon'></div></div><div class='col-xs-10 col-md-5 streamer-name'> "+ element.channelName + "</div><div class='col-xs-10 col-md-5 game-name'>Offline</div></div>";  
  $(str).appendTo(".load");
  }
  else{
    console.log(data.stream);
      console.log("online");
      return(data.stream);
  }
  }); 
}
