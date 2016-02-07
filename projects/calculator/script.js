document.addEventListener("DOMContentLoaded",function(){
	console.log("Ready");

	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var three = document.getElementById("three");
	var four = document.getElementById("four");
	var five = document.getElementById("five");
	var six = document.getElementById("six");
	var seven = document.getElementById("seven");
	var eight = document.getElementById("eight");
	var nine = document.getElementById("nine");
	var zero = document.getElementById("zero");

	var plus = document.getElementById("plus");
	var minus = document.getElementById("minus");
	var multi = document.getElementById("multi");
	var divi = document.getElementById("divi");
	var mod = document.getElementById("mod");

	var plmin = document.getElementById("plmin");
	var acc = document.getElementById("acc");
	var equal = document.getElementById("equal");
	var point = document.getElementById("point");

	var result = document.getElementById("result");

	var operator = "";
	var operand;
	var Num = "";
	var equalResult = "";

	function getNumber(){
		console.log(this.innerHTML);
		Num += this.innerHTML;
		displayResult();
		acc.innerHTML= "C";
	}

	function getOperator(){
		
		 if(equalResult != ""){
			operand = equalResult;
			operator = this.innerHTML;
		}
		else if(operator == ""){
			operand = Num;
			Num = "";
			operator = this.innerHTML;
		}
		else if(operator != ""){
			if(operand != "" && Num == ""){
				operator = this.innerHTML;
				console.log("Inside Not equal", operator, operand, Num);
			}
			else{
				var tempOperator = this.innerHTML;
				console.log(operand,Num);
				operation();
				operand = Num;
				Num = "";
				operator = tempOperator;
				console.log(operand,Num);
			}
		}
		

		console.log("operator : ", operator);
		
	}

	function displayResult(){
		console.log(Num);
		result.innerHTML = Num;
	}

	function padResult(){
		if(Num < Math.ceil(Num)){
			var flt = Math.round((Num - Math.floor(Num)) * 100);
			Num = Math.floor(Num) + (flt/100);
		}
	}

	function changeSign(){
		console.log("inside changeSign");
		Num *= -1;
		displayResult();

	}

	function getPoint(){

		if(Num == "" || Num == Math.round(Num)  &&  Num.indexOf('.') ==  -1 ){
			console.log(Num.indexOf('.'), "lol");
			console.log(this.innerHTML);
			Num += this.innerHTML;
			displayResult();
			acc.innerHTML= "C";
		}
	}
	function addition(value1,value2){
		return Number(value1) + Number(value2);
	}

	function sub(value1,value2){
		return Number(value1) - Number(value2);
	}

	function mult(value1,value2){
		return Number(value1) * Number(value2);
	}

	function div(value1,value2){
		return Number(value1) / Number(value2);
	}

	function modu(value1,value2){
		return Number(value1) % Number(value2);
	}

	function operation(){
		console.log(operand,Num,operator);
		switch(operator){
			case '+':
				Num = String(addition(operand,Number(Num)));
				padResult();
				displayResult();
				break;

			case '-':
				console.log("Inside Minus");
				Num = String(sub(operand,Number(Num)));
				padResult();
				displayResult();
				break;

			case 'x':
				Num = String(mult(operand,Number(Num)));
				padResult();
				displayResult();
				break;

			case '/':
				if(operand == '0'){
					result.innerHTML = "Not a number";
				}
				else{
					Num = String(div(operand,Number(Num)));
					padResult();
					displayResult();
				}
				break;

			case '%':
				Num = String(modu(operand,Number(Num)));
				displayResult();
				break;
		}
	}

	function displayClear(){
		result.innerHTML = 0;
		acc.innerHTML = "AC";
		operand = "";
		Num = "";
		equalResult = "";
		// console.log(oper)
	}

	function equalTo(){
		console.log("inside equal");
		operation();
		console.log(equalResult, Num, operator);		
		equalResult = Num;
		Num = "";
		operator = "";
		console.log(equalResult, Num, operator);	
	}

	one.addEventListener("click",getNumber);
	two.addEventListener("click",getNumber);
	three.addEventListener("click",getNumber);
	four.addEventListener("click",getNumber);
	five.addEventListener("click",getNumber);
	six.addEventListener("click",getNumber);
	seven.addEventListener("click",getNumber);
	eight.addEventListener("click",getNumber);
	nine.addEventListener("click",getNumber);
	zero.addEventListener("click",getNumber);
	point.addEventListener("click",getPoint);

	acc.addEventListener("click",displayClear);

	plmin.addEventListener("click",changeSign);
	
	plus.addEventListener("click",getOperator);
	minus.addEventListener("click",getOperator);
	divi.addEventListener("click",getOperator);
	multi.addEventListener("click",getOperator);
	mod.addEventListener("click",getOperator);
	
	equal.addEventListener("click",equalTo);
		
});