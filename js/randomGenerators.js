
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator(value) {
  // YOUR CODE HERE
  this.value = Math.floor((Math.random() * 6) + 1);


}

// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
var diceRollGenerator = new Generator();
var eightBallGenerator = new Generator();

console.log (diceRollGenerator);
console.log (eightBallGenerator);

function handleDiceRoll() {
  const resultElement = document.getElementById('diceResult');

  // TODO: call a method on diceRollGenerator to populate result with a random value
  const result = diceRollGenerator.value;
  resultElement.innerHTML = result;

  diceRollGenerator = new Generator();
}

function handleEightBallShake() {
  const resultElement = document.getElementById('eightBallResult');
  var answers = ['Indubitably', 'IDK my dude', 'Probs not', 'Hahaha no', 'Why are you asking a magic eight ball?', 'Figure it out yourself dingus'];
  // TODO: call a method on eightBallGenerator to populate result with a random value
  const result = answers[eightBallGenerator.value - 1];
  resultElement.innerHTML = result;

  eightBallGenerator = new Generator();
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
