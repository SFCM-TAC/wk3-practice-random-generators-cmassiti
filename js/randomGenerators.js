
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator() {
  // YOUR CODE HERE
  this.value = Math.floor((Math.random() * 6) + 1);
  console.log(this.value)
}

// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
const diceRollGenerator = this.value();
const eightBallGenerator = new Generator();

function handleDiceRoll() {
  const resultElement = document.getElementById('diceResult');

  // TODO: call a method on diceRollGenerator to populate result with a random value
  const result = "result";
  resultElement.innerHTML = result;
}

function handleEightBallShake() {
  const resultElement = document.getElementById('eightBallResult');

  // TODO: call a method on eightBallGenerator to populate result with a random value
  const result = "result";
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
