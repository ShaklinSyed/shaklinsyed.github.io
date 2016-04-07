// cases 
// 4. if collected 5 times increase lvl
//    increase the speed

document.addEventListener("DOMContentLoaded",function(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	var teaDrops = [],
		xC = 320,
		yC = 0,
		score = 0,
		speed = 20,
		pourCount = 0;


	//loading Cup Image
	var cup = new Image();
    cup.src = 'cup.png';
    cup.onload = function() {
        drawImage(this);
    };

    var teaDrop = new Image();
    teaDrop.src = 'drop.png';
    teaDrop.onload = function(){
    	drawTeaDrop(this);
    }

    var teaPot = new Image();
    teaPot.src = 'teapottilted.png';
    teaPot.onload = function(){
    	drawTeaPot(this);
    }


    function drawTeaPot(){
    	var imgX = teaDrops[0].x + 7;
    	var imgY = teaDrops[0].y - 50;
		console.log("Drew Tea pot",imgX,imgY);
    	context.drawImage(teaPot,imgX,imgY);
    	setTimeout(function(){
    		context.clearRect(0,0,canvas.width,50);
    	},350);
    }

	function getCoords(e){
	 	var rect = canvas.getBoundingClientRect();
	 	xC = e.clientX - rect.left;
		yC = e.clientY - rect.top;

		drawImage(cup);
	}

	function drawTeaDrop(imageObj){
		var imgX = teaDrops[0].x;
		var imgY = teaDrops[0].y;
		context.drawImage(imageObj,imgX,imgY);
	}

	function updateScore(type){
		if(type == "filled"){
		var list = document.getElementsByClassName("cup");	
			list[pourCount-1].classList.add("filled-cup");
		}
		else{
		var list = document.getElementsByClassName("cup");	
			list[pourCount-1].classList.add("broken-cup");
		}

		if(score == 5){
			exitGame();
			var list = document.getElementsByClassName("hide");
			list[0].style.visibility = "initial";
		}
		else if(pourCount === 6){
			exitGame();
			var list = document.getElementsByClassName("hide");
			list[1].style.visibility = "initial";

		}
	}

	function exitGame(){
		clearInterval(inter);
		context.clearRect(0,0,canvas.width,canvas.height);
		canvas.removeEventListener("mousemove",getCoords);
	}

	function pourTea(){
		context.clearRect(0,50,canvas.width,450);
		teaDrops[0].y += 3;

      	drawTeaDrop(teaDrop);
      	
      	if(teaDrops[0].y >= 477 && xC < teaDrops[0].x && xC+45 > teaDrops[0].x+15){
      			console.log("catched");
				pourCount++;
      			score++;
      			updateScore("filled");
      			teaDrops.pop();
      			getRandomCoords(1);
      	}
      	else if(teaDrops[0].y >= 485){
      		console.log("missed");
			pourCount++;
      		updateScore();
      		teaDrops.pop();
      		getRandomCoords(1);
      	}
	}

	function getRandomCoords(num){
		for(var i=0;i<num;i++){
			var minX = 20,
		 	maxX = 660,
		 	y = 50,
			randX = Math.floor(Math.random() * (maxX - minX)) + minX;
			teaDrops.push({"x" : randX, "y" : y});
		}
		if(pourCount <= 5 && score <5){
			drawTeaPot();			
		}
	}

	getRandomCoords(1);
	var inter = setInterval(pourTea,speed);
	var teaDropFreq = 1000;
	// rand = setInterval(createTea,teaDropFreq);

	canvas.addEventListener("mousemove", getCoords);
	
	var imageX,
		imageY;

	function drawImage(imageObj){
			imageX = xC,
			imageY = 500;
			var imageWidth = imageObj.width;
			var imageHeight = imageObj.height;

			if(imageX < 630 && imageX > 10 ){
				context.clearRect(0,500,canvas.width,200);
				context.drawImage(imageObj, imageX, imageY);
			}
	}
});