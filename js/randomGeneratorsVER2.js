
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator(opciones) {

  this.getValue = function(){
    var value = Math.floor((Math.random() * opciones.length));
    var answer = opciones[value];
    return(answer);
  }

  this.addresult = function(newSides) {
    var diff = newSides - (opciones.length + 1);
      while(diff > 0){
        opciones.push(opciones.length + 2);
        diff --;
      }

        while(diff < -1){
          opciones.pop();
          diff ++;

      }
    }
}
// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
var diceRollGenerator = new Generator([1, 2, 3, 4, 5, 6]);
var eightBallGenerator = new Generator(['Indubitably', 'IDK my dude', 'Probs not', 'Hahaha no', 'Why are you asking a magic eight ball?', 'Figure it out yourself dingus']);

function handleDiceRoll() {
  const resultElement = document.getElementById('diceResult');

  // TODO: call a method on diceRollGenerator to populate result with a random value
  const result = diceRollGenerator.getValue();
  resultElement.innerHTML = result;

}

function handleEightBallShake() {
  const resultElement = document.getElementById('eightBallResult');
  // TODO: call a method on eightBallGenerator to populate result with a random value
  const result = eightBallGenerator.getValue();
  resultElement.innerHTML = result;

}

document.addEventListener("DOMContentLoaded", function() {
  // this code block runs when the page finishes loading
  // and attaches listeners for button clicks
  // e.g. when the diceButton is clicked, it will run the handleDiceRoll function
  const diceButton = document.getElementById('diceButton');
  if (diceButton) {
    diceButton.addEventListener('click', handleDiceRoll);
  }

  const eightBallButton = document.getElementById('eightBallButton');
  if (eightBallButton) {
    eightBallButton.addEventListener('click', handleEightBallShake);
  }
});
