let counterElement = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "red";
  }
  else {
    counterElement.style.color = "black";
  }
  counterElement.textContent = updatedCounterValue;
}

function onReset() {
  let counterValue = 0;
  counterElement.textContent = counterValue;
  counterElement.style.color = "black";
}

// let counterValue = document.getElementById("counterValue");
// console.log(counterValue);
// function onDecrement(){
//     let previousValue = counterValue.textContent;
//     let counterValueUpdated = parseInt(previousValue) - 1;
//     console.log(counterValue);
//     if (counterValueUpdated>0) {
//         document.getElementById("counterValue").style.color = "green";
//     } else if(counterValueUpdated<0){
//         document.getElementById("counterValue").style.color = "red";
//     }
//     else{
//     document.getElementById("counterValue").style.color = "black";
//     }
//     counterValue = counterValueUpdated;
// }
// function onReset(){
//     let counterValue = 0;
//     document.getElementById("counterValue").style.color = "black";
//     document.getElementById("counterValue").textContent = counterValue;
// }
// function onIncrement(){
//     let previousValue = counterValue.textContent;
//     let counterValueUpdated = parseInt(previousValue) + 1;
//     if (counterValueUpdated>0) {
//         document.getElementById("counterValue").style.color = "green";
//     } else if(counterValueUpdated<0){
//         document.getElementById("counterValue").style.color = "red";
//     }
//     else{
//     document.getElementById("counterValue").style.color = "black";
//     }
//     counterValue = counterValueUpdated;
// }