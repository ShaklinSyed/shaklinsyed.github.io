$(document).ready(function(){
	console.log("Go");

	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");	

	var snake = {
		arr : [{
			x: 350,
			y: 350,
		},
		{
			x : 360,
			y : 350,
		},
		{
			x : 370,
			y : 350,
		}
		],

		food : {
			x: 0,
			y : 0,
		},

		direction : "left",
		canvasWidth : 750,
		canvasHeight : 600,
		
		drawSnake : function(){
			snake.Draw.rectangle(0,0,750,600,"white");
			snake.Draw.rectangle(snake.food.x,snake.food.y,10,10,"green");

			for(var i=0;i<snake.arr.length;i++){
				console.log(snake.arr[i].x, snake.arr[i].y);
				snake.Draw.rectangle(snake.arr[i].x, snake.arr[i].y, 9, 9, "yellow");
			}
		},

		loop : function(){

			for(var i= snake.arr.length-1 ;i > 0;i--){
				snake.arr[i].x = snake.arr[i-1].x;
				snake.arr[i].y = snake.arr[i-1].y;

			}

			console.log(snake.direction);

			if(snake.direction == "left"){
				snake.arr[0].x -= 10;
			}
			else if(snake.direction == "top" ){
				snake.arr[0].y -= 10;
			}
			else if(snake.direction == "right"){
				snake.arr[0].x += 10;
			}
			else if(snake.direction == "down"){
				snake.arr[0].y += 10;
			}

			
			// debugger

			//Checks For collision
			if (snake.arr[0].x < snake.food.x + 10 &&
 			  	snake.arr[0].x + 10 > snake.food.x &&
   				snake.arr[0].y < snake.food.y + 10 &&
   				10 + snake.arr[0].y > snake.food.y) {
    			
    			var len = snake.arr.length;

    			snake.arr.push({x:snake.arr[len-1].x,y: snake.arr[len-1].y});
    			
    			snake.addFood();
			}

			//checks for body collision

			for(var i =1;i<snake.arr.length;i++){
				if(snake.arr[0].x < snake.arr[i].x + 10 &&
				   snake.arr[0].x+10 > snake.arr[i].x  &&
				   snake.arr[0].y < snake.arr[i].y + 10 &&
				   10 + snake.arr[0].y > snake.arr[i].y){
					snake.gameOver();
				}
			}

			if(snake.arr[0].x <= 750 && snake.arr[0].x >= 0 && snake.arr[0].y <= 600 && snake.arr[0].y >= 0){
				console.log(snake.arr);
				snake.drawSnake();
			}
			else{
				snake.gameOver();
			}
			
		},

		init : function(){
			snake.addFood();
			snake.drawSnake();
		},

		gameOver : function(){
			clearInterval(intr);
			$("#modal").css("display","block");

		},

		addFood : function(){
			var x = Math.floor(Math.random() * this.canvasWidth);
			var y = Math.floor(Math.random() * this.canvasHeight);

			snake.food.x = x;
			snake.food.y = y;
		},

		Draw : {

			text : function(string,x,y,size,color){
				ctx.font = "bold " +  size + "px Arial";
				ctx.fillStyle = color;
				ctx.fillText(string,x,y);
			},
			
			rectangle : function(x,y,width,height,color){
				ctx.beginPath();
      			ctx.rect(x, y, width, height);
      			ctx.fillStyle = color;
      			ctx.fill();
      			ctx.lineWidth = 1;
      			ctx.strokeStyle = "black";
      			ctx.stroke();
			},
		},
	};

	document.addEventListener("keydown", function(event){
		var key = event.keyCode;

		console.log(key);
		// 37 : left
		// 38 : top
		// 39 : right
		// 40 : down

		if(key == 37 && snake.direction !="right"){
			snake.direction = "left";
		}
		else if(key == 38 && snake.direction != "down"){
			snake.direction = "top";
		}
		else if(key == 39 && snake.direction != "left"){
			snake.direction = "right";
		}
		else if(key == 40 && snake.direction != "top"){
			snake.direction = "down";
		}

	});

	var intr = setInterval(function(){
		snake.loop();
	},100);
	
	snake.init();


	$("#btn").on("click",function(){
		snake.arr =[{
			x: 350,
			y: 350,
		},
		{
			x : 360,
			y : 350,
		},
		{
			x : 370,
			y : 350,
		}
		];
		var intr = setInterval(function(){
		snake.loop();
	},100);
		snake.init();
		$("#modal").css("display","none");
		
	});
});