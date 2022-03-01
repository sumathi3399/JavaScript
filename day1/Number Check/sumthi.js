let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let gen = Math.ceil(Math.random()*100);
console.log(gen);
function checkGuess() {
  let value = parseInt(userInput.value);
 if (gen > value) {
   gameResult.textContent = "too low";
   gameResult.style.backgroundColor = "blue";
 } else if(gen < value) {
  gameResult.textContent = "too high";
   gameResult.style.backgroundColor = "blue"; 
 }else if(gen === value) {
  gameResult.textContent = "congrats";
   gameResult.style.backgroundColor = "green"; 
 }else{
  gameResult.textContent = "please enter valid input";
  gameResult.style.backgroundColor = "red";
 }

}