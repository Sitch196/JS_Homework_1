const input = document.querySelector(".input");
const button = document.querySelector(".button");
const result = document.querySelector(".result");

button.addEventListener("click", () => {
  const binaryNumber = document.createElement("p");
  let inputNumber = Number(input.value);
  if (inputNumber && typeof inputNumber === "number") {
    //turn into binary
    const newBinarYValue = inputNumber.toString(2);
    binaryNumber.textContent = newBinarYValue;
  } else {
    binaryNumber.style.color = "red";
    binaryNumber.textContent = "Please Enter a valid number ❌";
  }

  result.innerHTML = "";
  result.appendChild(binaryNumber);
  input.value = "";
});
