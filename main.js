
var numberButtons = document.getElementsByClassName('number-button');

var displayScreen = document.getElementById("display");

var clearScreen = document.getElementById("numButtonClear");

var displayScreenText = "";


function updateDisplayScreen() {

  displayScreen.innerHTML = displayScreenText;

}

function handleNumberClick(e) {

  displayScreenText += Number(e.target.innerHTML);

  updateDisplayScreen();

}

function clearDisplay() {
  
  displayScreenText = "";

  updateDisplayScreen();

}

clearScreen.addEventListener("click", clearDisplay);

for(var i = 0; i < numberButtons.length; i++){

  numberButtons[i].addEventListener("click", handleNumberClick);

}


  // display.value;

//displayScreen.innerHTML = "Hi, Ian.";
