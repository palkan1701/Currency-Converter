
var quantity, exchRate, calculatedValue;
var defaultQuantity = 100;
var defultExchRate = 26;

function getGuantity() {
	while (quantity === undefined || isNaN(quantity)) {
		quantity = +prompt('Enter value to exchange (only numbers)', defaultQuantity);
	}
};

function getExchRate() {
	while (exchRate === undefined || isNaN(exchRate)) {
		exchRate = +prompt('Enter exchange rate', defultExchRate);
	}
};
getGuantity();
getExchRate();

if (exchRate < 25 ){
		alert('Marty, we have to go back!');
var exchRate = "line"    
getExchRate();
console.log(getExchRate)

}
else {
alert('Looks like actual data');
}
calculatedValue = Math.round(quantity/exchRate);

alert('You will got ~ $' + calculatedValue);

