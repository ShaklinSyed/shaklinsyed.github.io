// cases 
// 1. tea is poured
// 2. move cup horizontally with mouse move
// 3. cup to collect 
// 	if collected increment the filled cup at top of the screen
// 	else mark it not
// 4. if collected 5 times increase lvl
//    increase the speed

document.addEventListener("DOMContentLoaded",function(){
	console.log("Ready My lord");

	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	var teaDrops = [],
		xC = 0,
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

	function getCoords(e){
	 	var rect = canvas.getBoundingClientRect();
	 	xC = e.clientX - rect.left;
		yC = e.clientY - rect.top;

		// context.fillStyle = "blue";
		// context.fillText("X : ",600,50);
		// context.fillText("Y : ",600,60);
		// context.fillText(xC, 620, 50);
		// context.fillText(yC, 620, 60);

		// console.log(xC,yC);
		// context.fillText(xC, 620, 50);
		// context.fillText(yC, 620, 60);

		drawImage(cup);
	}

	function drawTeaDrop(x,y){
		context.beginPath();
		context.arc(x, y, 15, 0, 2 * Math.PI,false);
      	context.fillStyle = 'brown';
      	context.fill();
	}

	function updateScore(type){
		console.log(pourCount);
		if(type == "filled"){
		var list = document.getElementsByClassName("cup");	
			list[pourCount-1].classList.add("filled-cup");
		}
		else{
		var list = document.getElementsByClassName("cup");	
			list[pourCount-1].classList.add("broken-cup");
		}

		if(score == 5){
			clearInterval(inter);
			var list = document.getElementsByClassName("hide");
			list[0].style.visibility = "initial";
		}
		else if(pourCount === 6){
			console.log(pourCount);
			clearInterval(inter);
			var list = document.getElementsByClassName("hide");
			list[1].style.visibility = "initial";
		}
	}

	function pourTea(){
		context.clearRect(0,0,canvas.width,500);
		teaDrops[0].y += 3;

      	drawTeaDrop(teaDrops[0].x,teaDrops[0].y);
      	
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
			console.log(randX);
			teaDrops.push({"x" : randX, "y" : y});
		}
	}

	var inter = setInterval(pourTea,speed);
	getRandomCoords(1);
	var teaDropFreq = 1000;
	// rand = setInterval(createTea,teaDropFreq);

	canvas.addEventListener("mousemove", getCoords);
	
	var imageX,
		imageY;

	function drawImage(imageObj){
			imageX = xC,
			imageY = 500,
			imageWidth = imageObj.width,
			imageHeight = imageObj.height;
			// console.log(imageX);

			if(imageX < 630 && imageX > 10 ){
				context.clearRect(0,500,canvas.width,200);
				context.drawImage(imageObj, imageX, imageY);
			}
	}
    
});