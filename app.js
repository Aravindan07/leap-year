let inputValue = document.getElementById("date-input");
let submitButton = document.getElementById("submit-button");
let outputDiv = document.querySelector(".output");
function clickHandler() {
  let dateValue = inputValue.value;
  let birthYear = dateValue.split("-")[0];
  if ((birthYear % 4 === 0 && birthYear % 100 != 0) || birthYear % 4 === 0) {
    outputDiv.innerText = `Congrats! You are born in a leap year.\n Feel free to share it on social media.`;
    outputDiv.style.color = "green";
    outputDiv.style.fontSize = "1.1rem";
    outputDiv.style.fontWeight = "bold";
    return;
  }
  outputDiv.innerText = "Oops! You didn't born in a leap year.";
  outputDiv.style.color = "red";
  outputDiv.style.fontSize = "1.1rem";
  outputDiv.style.fontWeight = "bold";
}

submitButton.addEventListener("click", clickHandler);
