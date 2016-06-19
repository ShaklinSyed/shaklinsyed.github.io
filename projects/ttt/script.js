$(document).ready(function(){

	var board= ["","","","","","","","",""];
	
	var user = "";
	var computer = "";
	
	var turn = "COMPUTER";

	$("#x").on("click",function(){
		$("#selectionBox").css("display","none");
		user = "X";
		computer = "O";
		turn = "COMPUTER";
		initialMove();
	});

	$("#o").on("click",function(){
		$("#selectionBox").css("display","none");
		user ="O";
		computer = "X";
		turn = "COMPUTER";
		initialMove();
	});

	$(".ele").on("click",userClick);

	function getEmptySpots(board){
		var result = new Array();

		for(var i=0;i<board.length;i++){
			if(board[i] == ""){
				result.push(i);
			}
		}
		return result;
	}

	function isSolved(board) {
		//X wins
		if((board[0] == computer && board[1] == computer && board[2] == computer) ||
		  	(board[3] == computer && board[4] == computer && board[5] == computer) ||
		  	(board[6] == computer && board[7] == computer && board[8] == computer) ||
		  	(board[0] == computer && board[4] == computer && board[8] == computer) ||
		  	(board[2] == computer && board[4] == computer && board[6] == computer) ||
		  	(board[0] == computer && board[3] == computer && board[6] == computer) ||
		  	(board[1] == computer && board[4] == computer && board[7] == computer) ||
		  	(board[2] == computer && board[5] == computer && board[8] == computer)){
		  	return 1;
		}
	  	
	  	//O wins
		else if((board[0] == user && board[1] == user && board[2] == user) ||
		  	(board[3] == user && board[4] == user && board[5] == user) ||
		  	(board[6] == user && board[7] == user && board[8] == user) ||
		  	(board[0] == user && board[4] == user && board[8] == user) ||
		  	(board[2] == user && board[4] == user && board[6] == user) ||
		  	(board[0] == user && board[3] == user && board[6] == user) ||
		  	(board[1] == user && board[4] == user && board[7] == user) ||
		  	(board[2] == user && board[5] == user && board[8] == user)){
		  	return -1;
		}

		//Draw
		else if((board[0] != "" && board[1] != "" && board[2] != "") &&
		 	(board[3] != "" && board[4] != "" && board[5] != "") &&
		 	(board[6] != "" && board[7] != "" && board[8] != "") ){
		 	console.log("DRAW");
		 	return 0;

		}
}

	function clearBoard(){
		console.log("clearBoard Called");
		$("#one").html("");
		$("#two").html("");
		$("#three").html("");
		$("#four").html("");
		$("#five").html("");
		$("#six").html("");
		$("#seven").html("");
		$("#eight").html("");
		$("#nine").html("");
		$("#ten").html("");
	}

function gameOver(){
	if(isSolved(board) == -1){
		alert("USER WON");

		user = "";
		computer = "";
		board= ["","","","","","","","",""];
		turn = "COMPUTER";
		clearBoard();
		$("#selectionBox").css("display","block");

	}
	else if(isSolved(board) == 1){
		alert("COMPUTER Won");

		user = "";
		computer = "";
		board= ["","","","","","","","",""];
		turn = "COMPUTER";
		clearBoard();
		$("#selectionBox").css("display","block");
		

	}
	else if(isSolved(board) == 0){
		alert("DRAW");

		user = "";
		computer = "";
		board = ["","","","","","","","",""];
		turn = "COMPUTER";
		clearBoard();
		$("#selectionBox").css("display","block");

	}
}
function makeMove(board, index, turn1){
	if(turn1 == "COMPUTER"){
		board[index] = computer;
	}
	else{
		board[index] = user;
	}
	return board;
}

function MiniMax(board, turned){
	var move = {
		position : "",
		score : 0,
	};
	
	var bestMove = {
		position : "",
		score : 0,
	};	

	bestMove.score = turned == 'USER' ? 2 : -2;

	if(isSolved(board) == 1 || isSolved(board) == 0 || isSolved(board) == -1){
		move.score = isSolved(board);
		return move;
	}


	var emptySpots = getEmptySpots(board);
	for(var i=0;i<emptySpots.length;i++){

		var foo = makeMove(board.slice(0),emptySpots[i], turned);
		
		move = MiniMax(foo,turned == "USER" ? "COMPUTER" : "USER");
		move.position = emptySpots[i];

		if((bestMove.score <= move.score && turned == "COMPUTER") || (bestMove.score >= move.score && turned == "USER")){
			bestMove.score = move.score;
			bestMove.position = move.position;
		}
	}
	return bestMove;
}



//To Mark the computer move to Display
function compToDisplay(num){
	switch(num){
		case 0 : 
		$("#one").html(computer);
		break;
		case 1 :
		$("#two").html(computer);
		break;
		case 2 :
		$("#three").html(computer);
		break;
		case 3 :
		$("#four").html(computer);
		break;
		case 4 :
		$("#five").html(computer);
		break;
		case 5 :
		$("#six").html(computer);
		break;
		case 6 :
		$("#seven").html(computer);
		break;
		case 7 :
		$("#eight").html(computer);
		break;
		case 8 :
		$("#nine").html(computer);
		break;
	}
}


//Game Starts HERE
//Makes the initial Move
function initialMove(){
	if(turn == "COMPUTER"){
		var move = Math.floor(Math.random() * 8);
		// console.log(move);
		board[move] = computer;
		compToDisplay(move);
		turn = "USER";
	}
}

// Event Handler for User input and also to call the computer move
function userClick(event){
	var id = event.target.id;
	console.log(isSolved(board));
	if(isSolved(board) != -1 || isSolved(board) != 1 || isSolved(board) != 0){
		if($("#"+id).html().length == 0 && turn == "USER"){
			console.log(id);
			$("#"+id).html(user);
			turn = "COMPUTER";
			switch(id){
				case "one":
				board[0] = user;
				break;
				case "two":
				board[1] = user;
				break;
				case "three":
				board[2] = user;
				break;
				case "four":
				board[3] = user;
				break;
				case "five":
				board[4] = user;
				break;
				case "six":
				board[5] = user;
				break;
				case "seven":
				board[6] = user;
				break;
				case "eight":
				board[7] = user;
				break;
				case "nine":
				board[8] = user;
				break;
			}

			var bar = MiniMax(board, turn).position;
			board[bar] = computer;
			compToDisplay(bar);
			console.log(isSolved(board), board);
			if(isSolved(board) != 1 && isSolved(board) != 0 && isSolved(board) !=-1){
				turn = "USER";
			}
			else{
				console.log("inside else")
				gameOver();
			}

		}
	}
	else{
		console.log("Game Over");
		gameOver();
	}
}
	

});
