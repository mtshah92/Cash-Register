var billAmount = document.querySelector(".bill-amount");
var cashGiven = document.querySelector(".cash-given");
var button = document.querySelector(".button");
var message = document.querySelector(".message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
const notes = [2000, 500, 100, 20, 10, 5, 1];

// button.addEventListener("click", clickEventHandler);

// function clickEventHandler() {
//   console.log(cashGiven.value);
//   console.log(billAmount.value);
// }

button.addEventListener("click", function validateAmounts() {
  hideMessage();
  message.style.display = "none";
  if (billAmount.value > 0) {
    if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do u wanna to wash the Plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);

    amountToBeReturned = amountToBeReturned % notes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
