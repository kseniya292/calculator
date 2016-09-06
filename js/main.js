$(document).ready(function () {
// $('.equals-button').prop('disabled', true);


// alert("yea");

var answer = 0;
var previousNumber = 0;
var currentNumber = 0;
var operatorClicked = false;
var firstNumber = false;
var display = $("#display-number");
var displayString = $("#display-string");
var equalDisabled = true; //this is to disable the equal sign when an operator has been clicked
var operationString = "";


$(".number").click(function() {
		if (display.html() === "0") {
			display.html(""); 
		}
		display.append($(this).text());	//if number div is clicked, append the text to the display section
		// console.log(parseFloat(display.text()));
		displayString.append($(this).text()) //if number div is clicked, append the text to the display string section
		operationString += $(this).text();
		//console.log(operationString);

		if (operatorClicked && firstNumber === false) { //if operator button is clicked and firstNumber is false..
			display.text($(this).text()); //replace previous number in display function and add new number
			firstNumber = true; //set firstNumber to true

		} 
		equalDisabled = false; 
	

}); //click 

$("#negative").on('click', function() {
	var negativeNumber = parseFloat(display.text()) * -1;
	display.html(negativeNumber);
	displayString.html(negativeNumber);
}); //on negative button click

$(".operation-button").on('click', function () { //when an operator button is clicked..
	equalDisabled = true;
	previousNumber = parseFloat(display.text()); //set previous number to the number on the display

		//console.log(operationString);
	display.text($(this).text());
	operatorClicked = true; //set opertorClicked to true
	displayString.append($(this).text()) //append operator symbol to display string section (go back up for another number click)
});

/*-------if operator is clicked, clicked equals true and operator to string------*/
$('#multiplyOperator').click(function(){
  $(this).data('clicked', true);
  operationString += "*";
});
$('#divideOperator').click(function(){
  $(this).data('clicked', true);
   operationString += "/";
});

$('#addOperator').click(function(){
  $(this).data('clicked', true);
   operationString += "+";
});
$('#subtractOperator').click(function(){
  $(this).data('clicked', true);
   operationString += "-";
});

/* when you hit equal, if Multiply operator clicked, multiple numbers etc....*/
$("#equals").on('click', function () { 
	if (!equalDisabled){
		currentNumber = parseFloat(display.text());
		displayString.append($(this).text()); //adds equal sign to display string

		display.text(eval(operationString));
		displayString.append(eval(operationString));

		// if($('#multiplyOperator').data('clicked')) {
	 //    	display.text(previousNumber * currentNumber);
	 //    	displayString.append(previousNumber * currentNumber);
		// } 
		// if($('#divideOperator').data('clicked')) {
	 //    	display.text(Math.round((previousNumber / currentNumber) * 1000)/1000);
	 //    	displayString.append(Math.round((previousNumber / currentNumber) * 1000)/1000);

		// } 
		// if($('#addOperator').data('clicked')) {
	 //    	display.text(previousNumber + currentNumber);
	 //    	displayString.append(previousNumber + currentNumber);
		// } 
		// if($('#subtractOperator').data('clicked')) {
	 //    	display.text(previousNumber - currentNumber);
	 //    	displayString.append(previousNumber - currentNumber);
		// } 
	}

});

$("#percent").on('click', function() {
	operationString -= display.text();
	var percentNumber = parseFloat(display.text())/100;
	display.text(percentNumber);
	displayString.text(percentNumber);
	operationString += percentNumber;

}); //on percent button click

$("#decimalPoint").on('click', function() {
	display.append($(this).text());
	displayString.append($(this).text());
	operationString += $(this).text();
	console.log(operationString);

}); // on decimal point click

$("#clearAll").on('click', function() {
	previousNumber = 0;
	currentNumber = 0;
	display.text("0");
	displayString.text(" ");
	operatorClicked = false;
	firstNumber = false;
	operationString = "";
}); //on clear all click




}); // document ready






