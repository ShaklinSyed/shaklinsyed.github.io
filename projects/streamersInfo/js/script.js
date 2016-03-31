var channels = ["ESL_SC2","OgamingSC2","freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","syndicate","riotgames","summit1g","brunofin","comster404"];
var urls = new Array();

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
  $("#all, #active, #offline").on("click",selectOption);


  $("#all").on("click", showAll);
  $("#active").on("click", showOnlyActive);
  $("#offline").on("click", showOnlyOffline);


  function selectOption(){
    $(".selected-tab").removeClass("selected-tab");
    $(this).addClass("selected-tab");
  }
  urls.forEach(getData);
});

//View Events to Hide and show selection
function showOnlyActive(){
  $(".online").show();
  $(".offline, .no-account").hide();
}

function showOnlyOffline(){
  $(".offline").show();
  $(".online, .no-account").hide();
}

function showAll() {
  $(".online, .offline, .no-account").show();
}

// To change the size of the logo from 300x300 to 50x50
function changeLogo(str){
  if(str){
    return str.replace("300x300","50x50");
  }
  else{
    return "img/question.png";
  }
}


function getData(element){
  $.getJSON(element.url, function(data){

    if(data.status == 422){
      var str = "<div class='row node no-account'><div class='col-xs-2 col-md-2'><div class='stream-icon' style= 'background : #eee url(\""+ changeLogo(null) +"\");'></div></div><div class='col-xs-10 col-md-5 streamer-name'>"+ element.channelName + "</div><div class='col-xs-10 col-md-5 game-name'>Account Closed</div></div>";  
      $(str).appendTo(".load");
    }

    else if(data.stream == null){
      // console.log("Offline");
      $.getJSON(data._links.channel,function(inData){ 
          console.log(element.channelName,inData.logo);
          var str = "<div class='row node offline'><div class='col-xs-2 col-md-2'><div class='stream-icon' style= 'background : #eee url(\""+ changeLogo(inData.logo) +"\");'></div></div><div class='col-xs-10 col-md-5 streamer-name'> <a href =\"https://www.twitch.tv/"+ element.channelName +"\""+" target=\"_blank\">"+ element.channelName + "</a></div><div class='col-xs-10 col-md-5 game-name'>Offline</div></div>";  
          $(str).appendTo(".load");
      });
    }
    
    else{
      // console.log("online");
      var str = "<div class='row node online'><div class='col-xs-2 col-md-2'><div class='stream-icon' style= 'background : url(\""+ changeLogo(data.stream.channel.logo) +"\");'></div></div><div class='col-xs-10 col-md-5 streamer-name'> <a href =\"https://www.twitch.tv/"+ data.stream.channel.name +"\""+" target=\"_blank\">"+ data.stream.channel.display_name + "</a></div><div class='col-xs-10 col-md-5 game-name'> "+  data.stream.game  +"<span> : "+data.stream.channel.status +"</span></div></div>";
      $(str).appendTo(".load");      
    }
    
  }); 
}
