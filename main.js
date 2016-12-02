
var quantity, exchRate, calculatedValue;
var defaultQuantity = "1";
var defultExchRate = "8";
var money = document.getElementById("quantity");
var rate = document.getElementById("exchRate");
var sum = document.getElementById("add-sum");




var inputText = function (e) {
	if (typeof money !== 'number') {
		e.preventDefault();
	}
	
}


money.addEventListener("input", getQuantity);
rate.addEventListener("input", getQuantity);
	
	function getQuantity () {
	var one = parseFloat(money.value) || 0;
	var two = parseFloat(rate.value) || 0;
	calculatedValue =(one/two);
	if (calculatedValue == NaN) {
		sum.innerHTML = "";
	}
	else if (one<two){
		sum.innerHTML = "";
	
	} 
	else if (calculatedValue == "Infinity") {
		sum.innerHTML = "";
	}
	else {
	sum.innerHTML = "Your will got: " +calculatedValue.toFixed(2) +" $ ";
	}
}



// function getExchRate() {
// 	while (exchRate === undefined || isNaN(exchRate)) {
// 		exchRate = +prompt('Enter exchange rate', defultExchRate);
// 	}
// };
// getGuantity();
// getExchRate();

// if (exchRate < 25 ){
// 		alert('Marty, we have to go back!');
// var exchRate = "line"    
// getExchRate();
// console.log(getExchRate)

// }
// else {
// alert('Looks like actual data');
// }
// calculatedValue =((quantity/exchRate).toFixed(2));

// alert('You will got ~ $' + calculatedValue);

