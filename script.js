const spanData = document.querySelector("span");
const buttons = document.querySelectorAll("button");

let counter = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("increment")) {
      counter++;
    } else if (button.classList.contains("decrement")) {
      counter--;
    }

    spanData.innerHTML = counter;

    if (counter > 0) {
      spanData.style.color = "#057936";
    } else if (counter < 0) {
      spanData.style.color = "red";
    } else {
      spanData.style.color = "#000";
    }
  });
});
